import React from 'react';
import styled from 'styled-components';

const NumberPadWrapper = styled.div`
    > .output{
      
    }
    > .note{
     display: flex;
     line-height: 40px;
     align-items: center;
     >span{
        margin-left: 10px;
      }
      >input{
        height: 30px;
        border: none;
        background: transparent;
        outline: none;
        flex-grow: 1;
      }
   }
    > .numberPad{
      padding-top: 10px;
       display: flex;
       font-family: Consolas,monospace;
       flex-wrap: wrap;
       >div{
          width: 25vw;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 60px;
          outline: 1px solid #fff;
       }
    }
`

const NumberPad:React.FC = ()=>{
  return (
    <NumberPadWrapper>
      <input type={'date'}/>
      <div className={'output'}>0</div>

      <label className={'note'}>
        <span>备注：</span>
        <input type="text" placeholder={'写点备注吧...'}/>
      </label>

      <div className={'numberPad'}>
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
        <div>0</div>
        <div>OK</div>
      </div>
    </NumberPadWrapper>
  )
}

export {NumberPad}