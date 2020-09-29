import dayjs from 'dayjs';
import {DataSourceItem} from '../view/Money';

const fetchSpecialTimeRecords = () => {
  const dataSource = JSON.parse(window.localStorage.getItem('records') || '[]')
  const today = dayjs().format('YYYY-MM-DD')
  const container: DataSourceItem[] = []
  dataSource.forEach((item: DataSourceItem)=>{
    if (item.date.indexOf(today) >=0){
      container.push(item)
    }
  })
  container.sort((a,b)=>{
    if (a.date > b.date){
      return -1
    } else if(a.date === b.date) {
      return 0
    } else {
      return 1
    }
  })
  return container
}

export {fetchSpecialTimeRecords}