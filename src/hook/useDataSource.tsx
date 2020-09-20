import {useEffect, useState} from 'react';

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
    setDataSourceItem({category:'-',tags:[],date:'',amount:'',note:''})
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


  return {dataSourceItem,setCategory,setBeSelectedTags}
}

export {useDataSource}