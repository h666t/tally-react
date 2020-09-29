import {DataSourceItem} from '../view/Money';



  const saveDataSource = (dataSourceItem:DataSourceItem,fn:()=>void) => {
    if (dataSourceItem.beSelectedTags.length === 0 ){
      alert('请至少选择一个标签')
      return
    }else if(dataSourceItem.amount === '0'){
      alert('请输入金额')
      return;
    }else {
      const dataSource:DataSourceItem[] = JSON.parse(window.localStorage.getItem('dataSource') || '[]')
      dataSource.push(dataSourceItem)
      window.localStorage.setItem('dataSource',JSON.stringify(dataSource))
      fn()
    }
  }


export {saveDataSource}