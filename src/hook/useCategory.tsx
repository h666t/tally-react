import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useCategory = () =>{
  const [category,setCategory] = useState<'+'|'-'>('-')
  useEffect(()=>{
    setCategory('-')
    window.localStorage.setItem('category','-')
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('category',JSON.stringify(category))
  },[category])

  const initCategory = () => {
    window.localStorage.setItem('category','-')
  }

  return {category,setCategory,initCategory}
}

export {useCategory}