import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/Icon';

const TagList = styled.div`
    height: 160px;
    background: white;
    padding: 15px;
    overflow: auto;
    display: flex;
    justify-content: center;
    
    > div{
      margin-left: -10px;
      >span{
        padding: 5px 15px;
        margin-left: 10px;
        line-height: 40px;
        position: relative;
        display: inline-block;
        .setting{
        position: absolute;
          height: 30px;
          width: 16px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
`

const Tags:React.FC = ()=>{
  return (
    <TagList>
        <div>
            <span>衣aaaaaaaaaaaa</span>
            <span>食</span>
            <span>住</span>
            <span>行</span>
            <span>衣</span>
            <span>食</span>
            <span>住</span>
            <span>行</span>
          <span>住</span>
          <span>
            <Icon id={'#setting'} prefix={'setting'}/>
          </span>

        </div>

    </TagList>
  )
}

export {Tags}