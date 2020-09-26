export type DataSourceItem = {
  amount: string
  beSelectedTags: number[]
  category:'+'|'-'
  date: string
  note: string
}
const fetchSpecialTimeAmount = (category: '+'|'-',date: string) => {
  const dataSource: DataSourceItem[] = JSON.parse(window.localStorage.getItem('records') || '[]')
  let amount = 0
  dataSource.forEach(item=>{
    if (item.date.indexOf(date)>=0 && item.category === category){
      const money = parseFloat(item.amount)
      amount += money
    }
  })
  return amount
}

export {fetchSpecialTimeAmount}