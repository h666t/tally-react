import React from 'react';
import styled from 'styled-components';
import {generateOutput} from '../../lib/generateOutput';
import {Line} from '../../components/Line';
import {Note} from './Note';
import {Date} from './Date';
import {useDataSourceItem} from '../../hook/useDataSource';

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

type Amount = {
  amount: string
}

export type NoteString = {
  note: string
}

export type DateString = {
  date: string
}

type Props = {
  amount: string
  setAmount: (amount: Amount)=>void
  note:string
  setNote: (note: NoteString)=>void
  date: string
  setDate: (date: DateString)=> void
}

const Calculator:React.FC<Props> = (props)=>{
    const {setAmount,amount} = props
    const {saveDataSource} = useDataSourceItem()
  const generateAmount = (amount: string) => {
      setAmount({amount:amount})
  }
  return (
    <div>
        <Date date={props.date} setDate={props.setDate}/>
        <Line/>
        <NumberPadOutputWrapper>
            {amount}
        </NumberPadOutputWrapper>
        <Line/>
        <Note note={props.note} setNote={props.setNote} />
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
                 onClick={saveDataSource}>OK</div>
        </CalculatorWrapper>
    </div>
  )
}

export {Calculator}