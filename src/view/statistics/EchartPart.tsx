import React, {useEffect} from 'react';
import styled from 'styled-components';
import {EChartOption} from 'echarts';
import {DataSourceItem} from '../Money';
const echarts = require('echarts');

const EchartWraper = styled.div`
   >#main{
    width: 500px;
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
    specialDataSource.forEach(item=>YResult.push(parseFloat(item.amount)))
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
      }]
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