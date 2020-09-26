import React, {useState} from 'react';
import {NavWithBack} from '../../../components/NavWithBack';
import {useParams,useHistory} from 'react-router-dom'
import {useTags} from '../../../hook/useTags';
import styled from 'styled-components';
import {Button} from '../../../components/Button';


const TagDetailWrapper = styled.div`
    >label{
      background: white;
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      >input{
        border:none;
        line-height: 48px;
      }
    }
    >.buttonWrapper{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        div:nth-child(1){
           margin-right: 5px;
        }
        div:nth-child(2){
           margin-left: 5px;
        }
    }
`

type Params = {
  id : string
}

const TagDetail = ()=> {
  const history = useHistory()
  const {findTagName,updateTag,removeTag} = useTags()
  const {id} = useParams<Params>();
  const preTagName = findTagName(id)
  const [newTagName,setNewTagName] = useState<string>('')
  const onClick = (fn:()=>void) => {
    return ()=>{
      fn()
      setTimeout(()=>{history.push('/Money/TagList')},0)
    }
  }

  return (
    <TagDetailWrapper>
      <NavWithBack title={'编辑标签'} backPath={'/Money/TagList'}/>
      <label>
        <span>标签名：</span>
        <input defaultValue={preTagName}
               onChange={(t)=>{
                 setNewTagName((t.target as HTMLInputElement).value)
               }}/>
      </label>

      <div className={'buttonWrapper'}>
        <Button onClick={onClick(()=>{updateTag(id,newTagName)})}>确认</Button>
        <Button onClick={onClick(()=>{removeTag(id)})}>删除</Button>
      </div>


    </TagDetailWrapper>
  )
}

export {TagDetail}