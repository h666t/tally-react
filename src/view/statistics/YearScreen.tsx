import React from 'react';
import styled from 'styled-components';
import {DataSourceItem} from '../Money';

const YearScreenWrapper = styled.div`
  height: 200px;
  background: white;
  padding-top: 20px;
  >.preData{
    display: flex;
    justify-content: center;
  }
  >.years{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 5px;
    >li{
      padding: 3px 10px;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 15px;
    }
    >.selected{
        background: #333333;
        color: white;
        border-radius: 15px;
    }
  }
`

type Props = {
  setBeSelectedDate:(year: string)=>void
  beSelectedDate: string
}

const YearScreen:React.FC<Props> = (props) => {
  const {beSelectedDate,setBeSelectedDate} = props
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
      <div className={'preData'}>往年数据</div>
      <ol className={'years'}>
        {yearsContainer.map(item=><li key={item} onClick={(event)=>{
          setBeSelectedDate((event.target as HTMLLIElement).innerText )
        }}
        className={beSelectedDate === item ? 'selected' : ''}
        >{item}</li>)}
      </ol>
    </YearScreenWrapper>
  )
}
export {YearScreen}
