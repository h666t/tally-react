import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {EChartOption} from 'echarts';
import {DataSourceItem} from '../Money';
import dayjs from 'dayjs';
const echarts = require('echarts');

const EchartWraper = styled.div`
   >#main{
    width: 100vw;
    height: 500px;
   }
`

type Props = {
  monthOrYear: 'month' | 'year'
  specialDataSource: DataSourceItem[]
}

const EchartPart:React.FC<Props> = (props) => {
  let myChart = null
  const {monthOrYear,specialDataSource} = props
  const xData = () => {
      const XResult: number[] = []
      if (monthOrYear === 'year'){
        for (let i = 1; i <= 12; i++){
          XResult.push(i)
        }
      }else if (monthOrYear === 'month'){
        for (let i = 1; i <= 30; i++){
          XResult.push(i)
        }
      }
      return XResult
  }
  const YData = () => {
    const YResult:number[] = []
    const YResultContainer :{date: string,amount: string}[] = []
    const dateContainer: string[] = []
    let numberForDateString: 7| 10
    if (monthOrYear === 'month'){
      numberForDateString = 10
    }else if (monthOrYear === 'year'){
      numberForDateString = 7
    }
    specialDataSource.forEach(item=>{
      if (dateContainer.indexOf(item.date.substring(0,numberForDateString)) < 0){
        dateContainer.push(item.date.substring(0,numberForDateString))
      }
    }) // 获取所有不重复的日期

      dateContainer.forEach(item=>{
        YResultContainer.push({date:item,amount:'0'})
        YResultContainer.sort((a,b)=>{
          if (a.date > b.date){
            return 1
          }else if (a.date < b.date){
            return  -1
          }else {
            return 0
          }
        })
      })

    YResultContainer.forEach(item=>{
      let amount = 0
      specialDataSource.map(x=>{
        if (x.date.indexOf(item.date) >= 0){
          amount += parseFloat(x.amount)
        }
      })
      item.amount = `${amount}`
    })

    if (monthOrYear === 'month'){ // 月度的Y轴数据
      for (let i = 1; i <= dayjs().daysInMonth(); i++){
        YResult.push(0)
      }
        YResultContainer.forEach(item=>{
          YResult.splice(parseInt(item.date.substring(8,10))-1,1,parseFloat(item.amount))
        })
    }
    if (monthOrYear === 'year'){
      for (let i = 1; i <= 12; i++){
        YResult.push(0)
      }
      YResultContainer.forEach(item=>{
        YResult.splice(parseInt(item.date.substring(5,7))-1,1,parseFloat(item.amount))
      })
    }
    return YResult
    }

  let option: EChartOption
  useEffect(()=>{
    myChart = echarts.init(document.getElementById('main'));
    option =  {
      title:{
        text:'支出'
      },
      tooltip: {},
      xAxis: {
        data: xData()
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: YData()
      }],
      grid: [{
        left: '13%',
        bottom: '18%',
        right: '0%'
      }],
      dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        left: '5%',
        bottom: 30,
        start: 0,
        end: 90 ,
        minSpan:35,
        maxSpan:35,
      }],
    };
    myChart.setOption(option);
  },[monthOrYear,specialDataSource])
  return (
    <EchartWraper>
      <div id={'main'}> </div>
    </EchartWraper>
  )
}

export {EchartPart}