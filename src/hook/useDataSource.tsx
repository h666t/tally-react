import {useEffect, useState} from 'react';

type DataSourceItem = {
  category: '+'|'-'
  tags: number[]
  date: string
  amount: string
  note: string
}
const useDataSource = ()=>{

  const [dataSourceItem,setDataSourceItem] = useState<DataSourceItem>({
    category:'-',tags:[],date:'',amount:'',note:''
  })
  useEffect(()=>{
    setDataSourceItem({category:'-',tags:[],date:'',amount:'',note:''})
  },[])

  const setCategory = ()=>{
    dataSourceItem.category === '-' ? setDataSourceItem({...dataSourceItem,category:'+'})
                                    : setDataSourceItem({...dataSourceItem,category:'-'})
  }

  const setBeSelectedTags = (idArray:number[])=>{
    setDataSourceItem({...dataSourceItem,tags:idArray})
  }

  return {dataSourceItem,setCategory,setBeSelectedTags}
}

export {useDataSource}