import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../components/Icon';
import {TypeTagsItem, useTags} from '../../../hook/useTags';
import { useHistory } from 'react-router-dom';
import {Button} from '../../../components/Button';

const ListWrapper = styled.div`
    >ul{
    position: relative;
    margin-bottom: 20px;
      >label{
         >li{
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.25);
          >.tagDetailIcon{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    >.buttonWrapper{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
`

const TagListBody = () => {
  const {tags,addTag} = useTags()
  const history = useHistory()
  const goToTagDetail = (id:number)=>{
   return ()=> history.push(`/Money/TagList/${id}`)
  }

  return (
    <ListWrapper>
      <ul>
        {tags.map((tag: TypeTagsItem)=>{
          if (tags.length>0){
            return (
              <label key={tag.id} onClick={goToTagDetail(tag.id)}>
                <li >
                  <span>{tag.name}</span>
                  <Icon id={'#right'} prefix={'tagDetailIcon'}/>
                </li>
              </label>
              )
          }
        })}
      </ul>
      <div className={'buttonWrapper'}>
        <Button onClick={addTag}>新建标签</Button>
      </div>

    </ListWrapper>
  )
}

export {TagListBody}