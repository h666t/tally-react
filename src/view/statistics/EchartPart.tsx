import React, {useEffect} from 'react';
import styled from 'styled-components';
import {EChartOption} from 'echarts';
const echarts = require('echarts');

const EchartWraper = styled.div`
   >#main{
    width: 500px;
    height: 500px;
   }
`

type Props = {
  monthOrYear: 'month' | 'year'
}

const EchartPart:React.FC<Props> = (props) => {
  let myChart = null
  const {monthOrYear} = props
  const xData = () => {
      const result: number[] = []
      if (monthOrYear === 'year'){
        for (let i = 1; i <= 12; i++){
          result.push(i)
        }
      }else if (monthOrYear === 'month'){
        for (let i = 1; i <= 30; i++){
          result.push(i)
        }
      }
      return result
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
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    myChart.setOption(option);
  },[monthOrYear])
  return (
    <EchartWraper>
      <div id={'main'}> </div>
    </EchartWraper>
  )
}

export {EchartPart}