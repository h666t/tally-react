import {useEffect, useState} from 'react';
import {DataSourceItem} from './useDataSourceItem';
import {useUpdate} from './useUpdate';

const useDataSource = ()=>{
  const [dataSource,setDataSource] = useState<DataSourceItem[]>([])

  useEffect(()=>{
    setDataSource(
      JSON.parse(window.localStorage.getItem('dataSource') || '[]')
    )
  },[])

  const save = (dataSource: DataSourceItem)=>{
    const container = JSON.parse(window.localStorage.getItem('dataSource') || '[]')
    container.push(dataSource)
    setDataSource(container)
  }

  return {dataSource,save}
}

export {useDataSource}