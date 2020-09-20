import {useEffect, useState} from 'react';
import {idCreator} from '../lib/idCreator';
import {useUpdate} from './useUpdate';

export type TypeTagsItem = {
  id:number
  name:string
}




const useTags = ()=>{
  const [tags,setTags] = useState<TypeTagsItem[]>([])

  useEffect(()=>{
      setTags(JSON.parse(window.localStorage.getItem('tags')
        || JSON.stringify([
        {id:idCreator(),name:'衣'},
        {id:idCreator(),name:'食'},
        {id:idCreator(),name:'住'},
        {id:idCreator(),name:'行'},
      ])))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])
  return {tags}
}

export {useTags}