import React, {useContext} from 'react';
import styled from 'styled-components';
import {generateOutput} from '../../lib/generateOutput';
import {Line} from '../../components/Line';
import {Note} from './Note';
import {Date} from './Date';
import {saveDataSource} from '../../lib/saveDataSource';
import {TextContext} from '../Money';

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

export type NoteString = {
  note: string
}

const Calculator:React.FC = ()=>{
  const {state,dispatch} = useContext(TextContext)
  const changeAmount = (amount: string) => {
    dispatch({type:'changeAmount',amount: amount})
  }
  const amount = state.amount
  const generateAmount = (amount: string) => {
      changeAmount(amount)
  }
  const initialMoney = () => {
    dispatch({type:'initial'})
  }
  return (
    <div>
        <Date/>
        <Line/>
        <NumberPadOutputWrapper>
            {amount}
        </NumberPadOutputWrapper>
        <Line/>
        <Note/>
        <CalculatorWrapper onClick={(e)=>{
            generateOutput(`${(e.target as HTMLDivElement).innerText}`,generateAmount)
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
                 onClick={()=>{
                   saveDataSource(state,initialMoney)
                 }}>OK</div>
        </CalculatorWrapper>
    </div>
  )
}

export {Calculator}