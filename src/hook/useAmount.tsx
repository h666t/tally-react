import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

const useAmount = ()=>{
  const [amount,setAmount] = useState('0')
  useEffect(()=>{
    setAmount('0')
    window.localStorage.setItem('amount','0')
  },[])
  useUpdate(()=>{
    setAmount(amount)
    window.localStorage.setItem('amount',JSON.stringify(amount))
  },[amount])
  const findAmount = ()=>{
    return JSON.parse(window.localStorage.getItem('amount') || '0')
  }
  return {amount,setAmount,findAmount}
}

export {useAmount}