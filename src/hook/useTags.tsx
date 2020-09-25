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
    if (name === null || name === "" ){
      alert('标签名不能为空')
      return
    }else {
      for (let i = 0; i< tags.length; i++){
        if (tags[i].name === name){
          alert('标签名重复')
          break
        }else {
          const cloneTags = JSON.parse(JSON.stringify(tags))
          cloneTags.push({id,name})
          setTags(cloneTags)
        }
      }
    }
  }

  return {tags,addTag}
}

export {useTags}