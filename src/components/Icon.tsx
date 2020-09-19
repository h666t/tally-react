import React from 'react';
import classNames from 'classnames';
type Props = {
  id: string
  prefix: string
} & React.SVGAttributes<SVGElement>

const Icon:React.FC<Props> = (props)=>{
  const importAll = (requireContent: __WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (e) {
    console.log(e);
  }
  const {id,prefix,children,className,...rest} = props
  return (
    <svg  className={classNames('icon',`${props.prefix}`)} {...rest} >
      <use xlinkHref={id}/>
    </svg>
  )
}

export {Icon}