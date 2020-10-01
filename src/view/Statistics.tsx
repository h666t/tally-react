import React, {useEffect, useState} from 'react';
import {NavWithBack} from '../components/NavWithBack';
import styled from 'styled-components';
import {Button} from '../components/Button';
import dayjs from 'dayjs';
import {fetchSpecialTimeAmount} from '../lib/fetchSpecialTimeAmount';
import {EchartPart} from './statistics/EchartPart';
import {DataSourceItem} from './Money';
import {fetchSpecialDataSource} from '../lib/fetchSpecialDataSource';
import {Icon} from '../components/Icon';
import {YearScreen} from '../view/statistics/YearScreen';

const StatisticsWrapper = styled.div`
  >.screen{
    display: flex;
    flex-direction: column;
    height: 120px;
    background: white;
    justify-content: center;
    padding-left: 20px;
    margin-top: 30px;
    >.dateLine{
      display: flex;
      justify-content: space-between;
      margin-right: 20px;
      >.calendarIcon{
        width: 20px;
        height: 20px;
      }
        >span:nth-child(1){
        font-weight: bold;
        padding-bottom: 5px;
      }
    }
  }
  >.buttonWrapper{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    >div{
        >.input{
          margin-left: 10px;
        }
        >.output{
          margin-right: 10px;
        }
    }
  }
  >.switch{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    color: #0f9570;
  }
`

const Statistics:React.FC = () => {
  const [isShowYearScreen,setIsShowYearScreen] = useState<'true' | 'false'>('true')
  const thisMonth = `${dayjs().format('YYYY年MM月')}`
  const inputAmount = fetchSpecialTimeAmount('+',thisMonth).toFixed(2)
  const outputAmount = fetchSpecialTimeAmount('-',thisMonth).toFixed(2)
  const [echartCategory,setEchartCategory] = useState<'+' | '-'>('-')
  const [monthOrYear,setMonthOrYear] = useState<'month' | 'year'>('month')
  const changeEchartCategory = (value: '+' | '-') => {
    setEchartCategory(value)
  }
  const changeMonthOrYear = () => {
    monthOrYear === 'month' ? setMonthOrYear('year')
                            : setMonthOrYear('month')
  }
  const [specialDataSource,setSpecialDataSource] = useState<DataSourceItem[]>([])
  useEffect(()=>{
    let date = dayjs().format('YYYY-MM')
    if (monthOrYear === 'month'){
      date = dayjs().format('YYYY-MM')
    }else if (monthOrYear === 'year'){
      date = dayjs().format('YYYY')
    }
    setSpecialDataSource(
      fetchSpecialDataSource(date,echartCategory)
    )
  },[echartCategory,monthOrYear])
  return (
    <StatisticsWrapper>
      <NavWithBack title={'账单详情'} backPath={'/'}/>
      {isShowYearScreen === 'true' && monthOrYear === 'year' ? <YearScreen/> : ''}
          <div className={'screen'}>
            <div className={'dateLine'}>
              <span>{thisMonth}</span>
              {monthOrYear === 'year' ? <Icon id={'#calendar'}
                                              prefix={'calendarIcon'}
                                              onClick={()=>{
                                                isShowYearScreen === 'true' ? setIsShowYearScreen('false') : setIsShowYearScreen('true')
                                              }}
              /> : ''}
            </div>
              <span>
                支出
                <span>￥{inputAmount}</span>
              </span>
              <span>
                收入
                <span>￥{outputAmount}</span>
              </span>
          </div>
      <div className={'buttonWrapper'}>
        <Button className={'output'} onClick={()=>{changeEchartCategory('-')}}>支出</Button>
        <Button className={'input'} onClick={()=>{changeEchartCategory('+')}}>收入</Button>
      </div>
      <div className={'switch'}>
        <span> </span>
        <span className={'switchButton'} onClick={changeMonthOrYear}>
          切换{monthOrYear === 'month' ? '月' : '年'}账单
        </span>
      </div>
      <EchartPart monthOrYear={monthOrYear} specialDataSource={specialDataSource}/>
    </StatisticsWrapper>
  )
}

export {Statistics}