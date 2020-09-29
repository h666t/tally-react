import dayjs from 'dayjs';
import {DataSourceItem} from '../view/Money';

const fetchSpecialDataSource = (date: string, category:'+'|'-'|'both') => {
  const dataSource = JSON.parse(window.localStorage.getItem('dataSource') || '[]')
  const container: DataSourceItem[] = []
  dataSource.forEach((item: DataSourceItem)=>{
    if (item.date.indexOf(date) >=0){
      switch (category) {
        case 'both':
          container.push(item)
          break
        case '+':
          if (item.category === '+'){container.push(item)}
          break
        case '-':
          if (item.category === '-'){container.push(item)}
          break
      }
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

export {fetchSpecialDataSource}