import React, {useEffect} from 'react';
import styled from 'styled-components';
import {fetchSpecialTimeRecords} from '../../lib/fetchSpecialTimeRecords';
import dayjs from 'dayjs';

const DetailListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    height: 300px;
    li{
      margin-bottom: 10px;
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
  const todayRecordsList = fetchSpecialTimeRecords()
  return (
    <DetailListWrapper>
      {todayRecordsList.map(item=>{
        return (
          <li>
        <div>
          <span>{item.beSelectedTags}</span>
        <span>{item.note}</span>
        </div>
            <div>
          <span>{item.category}</span>
          <span>￥{item.amount}</span>
        </div>
          </li>
        )
      })}
    </DetailListWrapper>
  )
}

export {RecordDetailList}