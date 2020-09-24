import React from 'react';
import {useHistory} from 'react-router-dom'
import {Title} from './Home/Title';
import styled from 'styled-components';
const HomePageWrapper = styled.div`
      .HomePageTittle{
        padding-left: 20px;
      }
`
const Home:React.FC = ()=>{
  const history = useHistory()
  return (
    <HomePageWrapper>
<Title text={'极简记帐'} prefix={'HomePageTittle'} />

<span onClick={()=>{
  history.push('/Money')
}}>
  记一笔
</span>

    </HomePageWrapper>
  )
}

export default Home