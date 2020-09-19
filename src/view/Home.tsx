import React from 'react';
import {useHistory} from 'react-router-dom'
import {Title} from './Home/Title';
const Home:React.FC = ()=>{
  const history = useHistory()
  return (
    <div>
<Title/>

<span onClick={()=>{
  history.push('/Money')
}}>
  记一笔
</span>

    </div>
  )
}

export default Home