import React, {useState} from 'react';
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

type DataSourceItem = {
  amount: string
  beSelectedTags: number[]
  category: '+'|'-'
  date: string
  note?: string
}

const Money:React.FC = () => {
  const [dataSourceItem,setDataSourceItem] = useState<DataSourceItem>({
    amount:'0',
    beSelectedTags:[],
    category:'-',
    date: `${dayjs().format('YYYY-MM-DD-HH-mm-ss')}`,
    note:''
  })
  const onChange = (obj: Partial<DataSourceItem>)=>{
    setDataSourceItem({...dataSourceItem,...obj})
  }
  return (
      <MoneyWrapper>
        <div>
          <Category value={dataSourceItem.category} onChange={onChange} />
          <Tags/>
        </div>
        <Calculator/>
      </MoneyWrapper>
  )
}

export default Money