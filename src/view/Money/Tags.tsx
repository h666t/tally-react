import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/Icon';
import {useTags} from '../../hook/useTags';
import {useHistory} from 'react-router-dom'
import {TextContext} from '../Money';

const TagList = styled.div`
    height: 160px;
    background: white;
    padding: 15px;
    overflow: auto;
    display: flex;
    > div{
          margin: 0 -12px;
          padding: 0 4px;
      >div{
            background: #D9D9D9;
            display: inline-block;
            padding: 3px 18px;
            font-size: 14px; 
            margin: 8px 12px;
            border-radius: 18px;
      }
      > .settingWrapper{
            background: white;
            display: inline-block;
            padding: 3px 10px;
            font-size: 14px; 
            margin: 8px 10px;
            position: relative;
            >.setting{
                position: absolute;
                width: 20px;
                height: 20px;
                top:0;
                left: 50%;
                transform: translateX(-50%);
            }
      }
        
      >.selected{
          background: #333333;
          color: white;
          border-radius: 15px;
      }
    }
`
const Tags:React.FC = ()=>{
  const {state,dispatch} = useContext(TextContext)
  const beSelectedTags = state.beSelectedTags
  const changeBeSelectedTags = (beSelectedTags:number[]) => {
    dispatch({type:'changeBeSelectedTags',beSelectedTags:beSelectedTags})
  }
  const {tags} = useTags()

  const selectThisTag = (id:number)=>{
    const cloneBeSelectedTags = JSON.parse(JSON.stringify(beSelectedTags))
      for (let i = 0; i <= beSelectedTags.length ;i++){
        if (beSelectedTags[i] === id){
          cloneBeSelectedTags.splice(i,1)
          changeBeSelectedTags(cloneBeSelectedTags)
        }else if (beSelectedTags.indexOf(id)<0){
            cloneBeSelectedTags.push(id)
            changeBeSelectedTags(cloneBeSelectedTags)
            break
        }
      }
  }
  const history = useHistory()
  return (
    <TagList>
      <div>
        {tags.map(item=>
          <div key={item.id}
                onClick={()=>{selectThisTag(item.id)}}
                className={beSelectedTags.indexOf(item.id)>=0 ? 'selected' : ''}>
              {item.name}
            </div>
        )}
        <div className={'settingWrapper'}
             onClick={()=>{history.push('/Money/TagList')}}
        >
          <Icon id={'#setting'}
                prefix={'setting'}
          />
        </div>
      </div>
    </TagList>
  )
}

export {Tags}