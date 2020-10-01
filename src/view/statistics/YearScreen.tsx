import React from 'react';
import styled from 'styled-components';
import {DataSourceItem} from '../Money';

const YearScreenWrapper = styled.div`
  height: 200px;
`

const YearScreen:React.FC = () => {
  const dataSource = JSON.parse(window.localStorage.getItem('dataSource') || '[]')
  const yearsContainer: string[] = []
  dataSource.forEach((item: DataSourceItem)=>{
    const yearString =  item.date.slice(0,4)
    if (yearsContainer.indexOf(yearString) < 0 ){
      yearsContainer.push(yearString)
    }
    yearsContainer.sort((a,b)=>{
      if (a > b){
        return -1
      }else if (a < b){
        return  1
      }else {
        return 0
      }
    })
  })
  return (
    <YearScreenWrapper>
      <span>往年数据</span>
      <ol className={'years'}>
        {yearsContainer.map(item=><li key={item}>{item}</li>)}
      </ol>
    </YearScreenWrapper>
  )
}
export {YearScreen}
