import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from 'styled-components';
import {NoteString} from './Calculator';

const NoteWrapper = styled.label`
     display: flex;
     line-height: 40px;
     align-items: center;
     padding-top: 5px;
     >span{
        margin-left: 10px;
      }
      >input{
        height: 30px;
        border: none;
        background: transparent;
        outline: none;
        flex-grow: 1;
      }
`

type Props = {
  note: string
  setNote: (note: NoteString)=>void
}

const Note:React.FC<Props> = (props)=>{

 return (
   <NoteWrapper>
     <span>备注：</span>
     <input type="text" placeholder={'写点备注吧...'}
            defaultValue={''}
            onChange={(e)=>{
              props.setNote({note: e.target.value})
            }}
     />
   </NoteWrapper>
 )
}

export {Note}