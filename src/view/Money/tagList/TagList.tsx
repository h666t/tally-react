import React from 'react';
import {NavWithBack} from '../../../components/NavWithBack';
import {TagListBody} from './TagListBody';

const TagList = ()=>{

  return (
    <div>
   <NavWithBack title={'标签详情'} backPath={'/Money'}/>
   <TagListBody/>
    </div>
  )
}

export {TagList}