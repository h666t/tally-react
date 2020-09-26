import React from 'react';
import styled from 'styled-components';

const DetailListWrapper = styled.div`
    display: flex;
    justify-content: center;
    >div{
      width: 90vw;
      border-radius: 18px;
      background: white;
      display: flex;
      justify-content: space-between;
      padding: 15px 20px;
      >span:nth-child(1){
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        >span:nth-child(2){
          color: #AFAFAF;
          font-size: 14px;
          padding: 5px;
        }
      }
      >span:nth-child(2){
        display: flex;
        padding-left: 5px;
      }
    }
`

const RecordDetailList = () => {
  return (
    <DetailListWrapper>
      <div>
        <span>
          <span>衣</span>
        <span>备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</span>
        </span>
        <span>
          <span>-</span>
          <span>￥12</span>
        </span>
      </div>
    </DetailListWrapper>
  )
}

export {RecordDetailList}