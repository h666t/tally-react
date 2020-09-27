import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {useUpdate} from './useUpdate';

const useDate = ()=>{
  const [date,setDate] = useState('')
  useEffect(()=>{
    setDate(`${dayjs().format('YYYY-MM-DD-HH-mm-ss')}`)
  },[])
  useUpdate(()=>{
    setDate(date)
    window.localStorage.setItem('date',JSON.stringify(date || `${dayjs().format('YYYY-MM-DD-HH-mm-ss')}`))
  },[date])

  const initDate = () => {
    window.localStorage.setItem('date',`${dayjs().format('YYYY-MM-DD-HH-mm-ss')}`)
  }

  return {date,setDate,initDate}
}

export {useDate}