import React, {useState} from 'react';
import {Category} from '../components/Category';
import {Tags} from './Money/Tags';
import styled from 'styled-components';
import {useDataSourceItem} from '../hook/useDataSourceItem';
import {Calculator} from './Money/Calculator';

const MoneyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`

const Money:React.FC = () => {
  const {dataSourceItem,setCategory,setBeSelectedTags} = useDataSourceItem()
  return (
      <MoneyWrapper>
        <div>
          <Category category={dataSourceItem.category}
                    onClick={setCategory}
          />
          <Tags beSelectedTags={dataSourceItem.tags}
                onClick={setBeSelectedTags}/>
        </div>
        <Calculator/>
      </MoneyWrapper>
  )
}

export default Money