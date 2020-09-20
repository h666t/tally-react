let i: number = JSON.parse(window.localStorage.getItem('idMAX') || '0')
const idCreator = ()=>{
  i+=1
  window.localStorage.setItem('idMAX',JSON.stringify(i))
  return i
}

export {idCreator}