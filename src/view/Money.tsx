import React, {useState} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {Category} from '../components/Category';
import {Tags} from './Money/Tags';
import {NumberPad} from './Money/NumberPad';
import styled from 'styled-components';
import {TypeTagsItem} from '../hook/useTags';
import {useDataSource} from '../hook/useDataSource';

const MoneyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`

const Money:React.FC = () => {
  const {dataSourceItem,setCategory,setBeSelectedTags} = useDataSource()
  const [date,setDate] = useState<string>('')
  const changeCategory=()=>{
    if (dataSourceItem.category==='-'){
      setCategory('+')
    }else {
      setCategory('-')
    }
  }
  const changeBeSelectedTags = (id:number)=>{
    const index = dataSourceItem.tags.indexOf(id)
    if (index<0){
      setBeSelectedTags([...dataSourceItem.tags,id])
    }
    else {
      setBeSelectedTags(dataSourceItem.tags.filter(item=>item!==id))
    }
  }

  const changeDate= (date: string)=>{
    setDate(date)
  }
  return (
      <MoneyWrapper>
        <div>
          <Category category={dataSourceItem.category}
                    onClick={changeCategory}
          />
          <Tags beSelectedTags={dataSourceItem.tags}
                onClick={changeBeSelectedTags}/>
        </div>
        <NumberPad />
      </MoneyWrapper>
  )
}

export default Money