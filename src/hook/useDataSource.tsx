import {useEffect, useState} from 'react';
import dayjs from 'dayjs';

type DataSourceItem = {
  category: '+'|'-'
  tags: number[]
  date: string
  amount: string
  note: string
}
const useDataSource = ()=>{
  // TODO 点击OK后也要重置

  const [dataSourceItem,setDataSourceItem] = useState<DataSourceItem>({
    category:'-',tags:[],date:'',amount:'',note:''
  })

  useEffect(()=>{
    setDataSourceItem({category:'-',tags:[],date:`${dayjs().format('YYYY-MM-DD')}`,amount:'',note:''})
  },[])

  const setCategory = ()=>{
    dataSourceItem.category === '-' ? setDataSourceItem({...dataSourceItem,category:'+'})
                                    : setDataSourceItem({...dataSourceItem,category:'-'})
  }

  const setBeSelectedTags = (id:number)=>{
    const index = dataSourceItem.tags.indexOf(id)
    index<0 ? setDataSourceItem({...dataSourceItem,tags:[...dataSourceItem.tags,id]})
            : setDataSourceItem({...dataSourceItem,tags:dataSourceItem.tags.filter(item=>item!==id)})
    }

  const setDate = (date:string)=>{
    if (date !== dataSourceItem.date){
      setDataSourceItem({...dataSourceItem,date:date})
    }
  }

  const setNote = (note:string)=>{
    setDataSourceItem({...dataSourceItem,note:note})
  }

  return {dataSourceItem,setCategory,setBeSelectedTags,setDate,setNote}
}

export {useDataSource}