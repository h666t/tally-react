import React from 'react';
import styled from 'styled-components';
import {Icon} from './Icon';
import {useHistory} from 'react-router-dom'
import {useCategory} from '../hook/useCategory';

const CategorySelection = styled.section`
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 50px;
    justify-content: space-between;
    background: #ebeff2;
    
    > div{
     span:nth-child(1){
      height: 62px;
      margin-right: 5px;
      position: relative;
      padding: 5px;
    }
    span:nth-child(2){
      height: 62px;
      margin-right: 5px;
      position: relative;
      padding: 5px;
    }
    .selected:after{
        position: absolute;
        left: 0;
        bottom:0;
        width: 100%;
        content: '';
        border-bottom: 3px solid black;
      }
    }
    
    > .category-left{
      width: 20px;
      height: 20px;
      margin-left: 20px;
    }
   
`

const Square = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`


const Category:React.FC = ()=>{
  const {category,setCategory,findCategory} = useCategory()
  const history = useHistory()
  return (
    <CategorySelection>
      <Icon id={'#left'} prefix={'category-left'} onClick={()=>{history.push('/')}} />
      <div>
        <span className={category==='-'?'selected':''}
              onClick={()=>{setCategory('-')}}>支出</span>
        <span className={category==='+'?'selected':''}
              onClick={()=>{setCategory('+')}}>收入</span>
      </div>
      <Square/>
    </CategorySelection>
  )
}

export {Category}