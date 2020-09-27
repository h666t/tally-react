import {DataSourceItem} from '../view/Money';


  const saveDataSource = (dataSourceItem:DataSourceItem) => {

    if (dataSourceItem.beSelectedTags.length === 0 ){
      alert('请至少选择一个标签')
      return
    }else if(dataSourceItem.amount === '0'){
      alert('请输入金额')
      return;
    }else {
      const records = JSON.parse(window.localStorage.getItem('records') || '[]')
      records.push(dataSourceItem);
      window.localStorage.setItem('records',JSON.stringify(records))
    }
  }


export {saveDataSource}