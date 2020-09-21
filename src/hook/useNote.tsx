import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useNote = ()=>{
  const [note,setNote] = useState('')
  useEffect(()=>{
    setNote('')
    window.localStorage.setItem('note','[]')
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('note',JSON.stringify(note ||'[]'))
  },[note])

  const findNote = ()=>{
    return JSON.parse(window.localStorage.getItem('note') || '')
  }

  return {findNote,setNote}
}

export {useNote}