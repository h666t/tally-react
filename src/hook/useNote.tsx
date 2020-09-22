import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useNote = ()=>{
  const [note,setNote] = useState('')
  useEffect(()=>{
    setNote('')
    window.localStorage.setItem('note','')
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('note',JSON.stringify(note ||''))
  },[note])


  const initNote = () => {
    window.localStorage.setItem('note','')
  }


  return {setNote,initNote}
}

export {useNote}