import React from 'react';

type Props = {
  id: string
} & React.SVGAttributes<SVGElement>

const Icon:React.FC<Props> = (props)=>{
  const importAll = (requireContent: __WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (e) {
    console.log(e);
  }
  const {id,children,...rest} = props
  return (
    <svg {...rest} >
      <use xlinkHref={id}/>
    </svg>
  )
}

export {Icon}