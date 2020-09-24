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

  const addTag = () =>{
    const id = idCreator()
    const name = window.prompt('请输入标签名')
    tags.map(t=>{
      if (t.name === name){
        window.alert('标签名错误')
        return false
      }else {
        const cloneTags = JSON.parse(JSON.stringify(tags))
        cloneTags.push({id,name})
        setTags(cloneTags)
        return  undefined
      }
    }
    )
  }

  return {tags,addTag}
}

export {useTags}