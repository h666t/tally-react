import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {useUpdate} from './useUpdate';

const useDate = ()=>{
  const [date,setDate] = useState('')
  useEffect(()=>{
    setDate(`${dayjs().format('YYYY-MM-DD')}`)
  },[])
  useUpdate(()=>{
    setDate(date)
    window.localStorage.setItem('date',JSON.stringify(date || `${dayjs().format('YYYY-MM-DD')}`))
  },[date])

  const initDate = () => {
    window.localStorage.setItem('date',`${dayjs().format('YYYY-MM-DD')}`)
  }

  return {date,setDate,initDate}
}

export {useDate}