import React from 'react'
import Logo from '../../assets/lobo.png'
import {Button} from './styles'

export interface Props{
    selected?: boolean;
    isHome?: boolean;
    hasNotification?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    isHome,
    hasNotification,
    mentions,
    selected,
}) =>{
    return(
      <Button
      isHome = {isHome}
      hasNotification = {hasNotification}
      mentions = {mentions}
      className = {selected ? 'active' : ''}
    >{isHome && <img src={Logo} alt="lobo"/>}</Button>
    )
}

export default ServerButton;