import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDataSourceItem} from '../../hook/useDataSourceItem';
import {generateOutput} from '../../lib/generateOutput';
import {Line} from '../../components/Line';
import {Note} from './Note';
import {Date} from './Date';

const CalculatorWrapper = styled.div`
     padding-top: 5px;
       display: flex;
       font-family: Consolas,monospace;
       flex-wrap: wrap;
       >div{
          width: 25vw;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 60px;
          border: 1px solid #fff;
       }
       >.zero{
          width: 50%;
       }
       >.OK{
          width: 50%;
       }
`
const NumberPadOutputWrapper = styled.div`
      padding-top: 8px;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      font-size: 36px;
      font-family: Consolas,monospace;
`
const Calculator:React.FC = ()=>{
    const {setAmount,dataSourceItem,saveDataSource} = useDataSourceItem()

  return (
    <div>
        {dataSourceItem.category}
        <Date/>
        <Line/>
        <NumberPadOutputWrapper>
            {dataSourceItem.amount}
        </NumberPadOutputWrapper>
        <Line/>
        <Note/>
        <CalculatorWrapper onClick={(e)=>{
            generateOutput(`${(e.target as HTMLDivElement).innerText}`,setAmount)
        }}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>删除</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>清零</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>.</div>
            <div className={'zero'}>0</div>
            <div className={'OK'}
                 onClick={saveDataSource}>OK</div>
        </CalculatorWrapper>
    </div>
  )
}

export {Calculator}