import React, {createContext, ReducerState, useReducer} from 'react';
import {Category} from '../components/Category';
import {Tags} from './Money/Tags';
import styled from 'styled-components';
import {Calculator} from './Money/Calculator';
import dayjs from 'dayjs';

const MoneyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`

export type DataSourceItem = {
  amount: string
  beSelectedTags: number[]
  category: '+'|'-'
  date: string
  note: string
}

const initial:DataSourceItem = {
  amount:'0',
  beSelectedTags:[],
  category:'-',
  date: `${dayjs().format('YYYY-MM-DD-HH-mm-ss')}`,
  note:''
}

const reducer = (state:ReducerState<any>,action:any) => {
  if (action.type === 'changeCategory'){
    // @ts-ignore
    return {...state,category:action.category}
  }else if (action.type === 'changeBeSelectedTags'){
    // @ts-ignore
    return {...state,beSelectedTags:action.beSelectedTags}
  }else if (action.type === 'changeAmount'){
    // @ts-ignore
    return {...state,amount:action.amount}
  }else if (action.type === 'changeDate'){
    // @ts-ignore
    return {...state,date:action.date}
  }else if (action.type === 'changeNote'){
    // @ts-ignore
    return {...state,note:action.note}
  }else if (action.type === 'initial'){
    return {...initial}
  }
}
export const TextContext  = createContext<any>(null)
const Money:React.FC = () => {
  const [state,dispatch] = useReducer(reducer,initial)
  return (
      <MoneyWrapper>
        <TextContext.Provider value={{state,dispatch}}>
        <div>
          <Category/>
          <Tags/>
        </div>
        <Calculator/>
        </TextContext.Provider>
      </MoneyWrapper>
  )
}

export default Money