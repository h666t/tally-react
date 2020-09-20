import {useEffect, useRef} from 'react';

const useUpdate = (fn:()=>void,deps:any[])=>{
  const ref1 = useRef(0)
  useEffect(()=>{
    ref1.current+=1
  })
  useEffect(()=>{
    if (ref1.current>1){
      fn()
      return;
    }
  },deps)
}

export {useUpdate}