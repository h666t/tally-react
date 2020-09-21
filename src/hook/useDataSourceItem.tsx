import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {useUpdate} from './useUpdate';
import {useDataSource} from './useDataSource';

export type DataSourceItem = {
  category: '+'|'-'
  tags: number[]
  date: string
  amount: string
  note: string
}
const useDataSourceItem = ()=>{
  // TODO 点击OK后也要重置

  const {dataSource,save} = useDataSource()

  const [dataSourceItem,setDataSourceItem] = useState<DataSourceItem>({
    category:'-',tags:[],date:'',amount:'0',note:''
  })

  useEffect(()=>{
    setDataSourceItem({category:'-',tags:[],date:`${dayjs().format('YYYY-MM-DD')}`,amount:'0',note:''})
  },[])

  useUpdate(()=>{
    setDataSourceItem(dataSourceItem)
    console.log(dataSourceItem);
  },[dataSourceItem])

  const setCategory = ()=>{
    dataSourceItem.category === '-' ? setDataSourceItem({...dataSourceItem,category:'+'})
      : setDataSourceItem({...dataSourceItem,category:'-'})
  }

  const setBeSelectedTags = (id:number)=>{
    const index = dataSourceItem.tags.indexOf(id)
    index<0 ? setDataSourceItem({...dataSourceItem,tags:[...dataSourceItem.tags,id]})
      : setDataSourceItem({...dataSourceItem,tags:dataSourceItem.tags.filter(item=>item!==id)})
    console.log(dataSourceItem.tags);
  }

  const setDate = (date:string)=>{
    if (date !== dataSourceItem.date){
      setDataSourceItem({...dataSourceItem,date:date})
    }
  }

  const setNote = (note:string)=>{
    setDataSourceItem({...dataSourceItem,note:note})
  }

  const setAmount = (amount:string)=>{
    setDataSourceItem({...dataSourceItem,amount:amount})
  }

  const saveDataSource = () =>{
    if (dataSourceItem.tags.length === 0){
      alert('请至少选择一个标签')
      return
    }
    if (dataSourceItem.amount === '0'){
      alert('请输入金额')
      return;
    }
      save(dataSourceItem)
  }

  return {dataSourceItem,setCategory,setBeSelectedTags,setDate,setNote,setAmount,saveDataSource}
}

export {useDataSourceItem}