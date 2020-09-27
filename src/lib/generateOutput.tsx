let container = '0'
const generateOutput = (value:string,setAmount:(amount:string)=>void) => {
  switch (value) {
    case '0' :case '1':case '2' :case '3':case '4' :case '5':case '6' :case '7':case '8' :case '9':
      if (container[0] === '0' && container[1]!=='.'){
        container += value
        container = container.substring(1,container.length)
        setAmount(container)
        return;
      }else {
        container += value
        setAmount(container);
        return;
      }

    case '清零':
      container = '0'
      setAmount(container);
      return

    case '删除':
      if (container.length > 1){
        setAmount(container.substring(0,container.length - 1))
        container = container.substring(0,container.length - 1)
        return;
      }
      if (container.length === 1) {
        container = '0'
        setAmount(container)
        return;
      }
      break

    case '.' :
      if (container[0]==='0'){
        container = '0.'
        setAmount(container)
        return;
      }
      if (container.indexOf('.')>=0){
        return;
      }
      setAmount(container += value)
      break
    default:
      container = '0'
  }
}

export {generateOutput}