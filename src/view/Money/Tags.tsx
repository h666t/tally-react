import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/Icon';
import {TypeTagsItem, useTags} from '../../hook/useTags';
import {useSelectTags} from '../../hook/useSelectTags';
import {useHistory} from 'react-router-dom'

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
  const {tags} = useTags()
  const {beSelectedTags,selectThisTag} = useSelectTags()
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