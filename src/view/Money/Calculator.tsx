import React from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
     padding-top: 5px;
       display: flex;
       font-family: Consolas,monospace;
       flex-wrap: wrap;
       >div{
          width: 25vw;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 60px;
          border: 1px solid #fff;
       }
       >.zero{
          width: 50%;
       }
       >.OK{
          width: 50%;
       }
`

const Calculator:React.FC = ()=>{
  return (
    <CalculatorWrapper>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>删除</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>清零</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>.</div>
      <div className={'zero'}>0</div>
      <div className={'OK'}>OK</div>
    </CalculatorWrapper>
  )
}

export {Calculator}