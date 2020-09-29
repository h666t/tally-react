import React, {useEffect} from 'react';
import styled from 'styled-components';
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
  const  option = {
    title:{
      text:'支出'
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  useEffect(()=>{
    myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
  },[])
  return (
    <EchartWraper>
      <div id={'main'}> </div>
    </EchartWraper>
  )
}

export {EchartPart}