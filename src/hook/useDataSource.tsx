import dayjs from 'dayjs';
import {useSelectTags} from './useSelectTags';
import {useCategory} from './useCategory';
import {useDate} from './useDate';
import {useNote} from './useNote';
import {useAmount} from './useAmount';


const useDataSourceItem = () => {
  const {initSelectedTags} = useSelectTags()
  const {initCategory} = useCategory()
  const {initDate} = useDate()
  const {initNote} = useNote()
  const {initAmount} = useAmount()
  const find = (key: string,floor: string)=>{
    let result
    try {
      result = JSON.parse(window.localStorage.getItem(key) || floor)
    }catch (e) {
      console.log(e);
    }
    return  result
  }

  const findCategory = ()=>{
    return window.localStorage.getItem('category')
  }
  const findBeSelectedTags = ()=>{
    return find('selectedTags','[]')
  }
  const findAmount = () => {
    return find('amount','0')
  }
  const findDate = () =>{
    return find('date',`${dayjs().format('YYYY-MM-DD-HH-mm')}`)
  }
  const findNote = ()=>{
    return find('note','')
  }

  const init = () => {
    initSelectedTags()
    initCategory()
    initDate()
    initNote()
    initAmount()
  }

  const saveDataSource = () => {
    const category = findCategory()
    const beSelectedTags = findBeSelectedTags()
    const date = findDate()
    const amount = findAmount()
    const note = findNote()
    const record = {
      category:category,
      beSelectedTags:beSelectedTags,
      date:date,
      amount:amount,
      note:note
    }
    if (beSelectedTags.length === 0 ){
      alert('请至少选择一个标签')
      return
    }else if(amount === 0){
      alert('请输入金额')
      return;
    }else {
      const records = JSON.parse(window.localStorage.getItem('records') || '[]')
      records.push(record);
      window.localStorage.setItem('records',JSON.stringify(records))
      init()
    }
  }

  return {saveDataSource}
}

export {useDataSourceItem}