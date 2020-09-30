import React from 'react';
import styled from 'styled-components';

const YearScreenWrapper = styled.div`
  height: 200px;
`

const YearScreen:React.FC = () => {
  return (
    <YearScreenWrapper>
      <span>往年数据</span>
    </YearScreenWrapper>
  )
}
export {YearScreen}
