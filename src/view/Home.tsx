import React from 'react';
import {useHistory} from 'react-router-dom'
import {Title} from './Home/Title';
import styled from 'styled-components';
import {RecordScreen} from './Home/RecordScreen';
import {RecordDetail} from './Home/RecordDetail';
import {Button} from '../components/Button';
const HomePageWrapper = styled.div`
      .HomePageTittle{
        padding-left: 20px;
      }
      >.buttonWrapper{
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
        margin-right: 20px;
      }
`
const Home:React.FC = ()=>{
  const history = useHistory()
  return (
    <HomePageWrapper>
      <Title text={'极简记帐'} prefix={'HomePageTittle'} />
      <RecordScreen/>
      <RecordDetail/>
      <div className="buttonWrapper">
        <Button onClick={()=>{history.push('/Money')}}>记一笔</Button>
      </div>
    </HomePageWrapper>
  )
}

export default Home