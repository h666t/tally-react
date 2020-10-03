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

  const operateSpecialTagItem = (idString:string,name:string,type: 'update'|'remove') => {
    const id = parseInt(idString)
    const cloneTags: TypeTagsItem[] = JSON.parse(JSON.stringify(tags))

    for (let i = 0; i < tags.length; i++){
      if (tags[i].id === id && type === 'update'){ // 更新tag的逻辑
        cloneTags.splice(i,1,{id,name})
        setTags(cloneTags)
        break
      }else if (tags[i].id === id && type === 'remove'){ // 删除tag的逻辑
        cloneTags.splice(i,1)
        setTags(cloneTags)
      }
    }
  }

  const findTagName = (arr: number[] | number) => {
    let name: string[] = []
    if (arr instanceof Array){
      tags.map(item=>{
        if (arr.indexOf(item.id)>=0){
          name.push(item.name)
        }
      })
    }else {
      tags.forEach(item=>{
        if (item.id === arr){
          name.push(item.name)
        }
      })
    }
    return name
  }

  const removeTag = (idString: string) => {
     operateSpecialTagItem(idString,'','remove')
  }

  const updateTag = (idString:string,name: string) => {
    operateSpecialTagItem(idString,name,'update')
  }

  const addTag = () =>{
    const name = window.prompt('请输入标签名')
    if (name === "" ){   // 标签名为空时
      alert('标签名不能为空')
      return
    }else if(name === null){ // 标签名为null时
      return;
    }else{
      const id = idCreator()
      if (tags.length === 0 ){ // tags 为空数组时
        setTags([{id,name}])
      }
      for (let i = 0; i < tags.length; i++){ // 其他情况
        if (tags[i].name === name){
          alert('标签名重复')
          break
        } else {
          const cloneTags = JSON.parse(JSON.stringify(tags))
          cloneTags.push({id,name})
          setTags(cloneTags)
        }
      }
    }
  }

  return {tags,addTag,findTagName,updateTag,removeTag}
}

export {useTags}