import React from 'react';
import {useHistory} from 'react-router-dom'
const Home:React.FC = ()=>{
  const history = useHistory()
  return (
    <div>

<span onClick={()=>{
  history.push('/Money')
}}>
  记一笔
</span>

    </div>
  )
}

export default Home