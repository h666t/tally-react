import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useSelectTags = ()=>{
  const [beSelectedTags,setBeSelectedTags] = useState<number[]>([])
  const selectThisTag = (id:number)=>{
    const index = beSelectedTags.indexOf(id)
    index < 0 ? setBeSelectedTags([...beSelectedTags,id])
              : setBeSelectedTags(beSelectedTags.filter(item=>item!==id))
  }

  useEffect(()=>{
    setBeSelectedTags([])
    window.localStorage.setItem('selectedTags','[]')
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('selectedTags',JSON.stringify(beSelectedTags))
  },[beSelectedTags])

  const initSelectedTags = ()=>{
    setBeSelectedTags([])
  }


  return {beSelectedTags,selectThisTag,initSelectedTags}
}

export {useSelectTags}