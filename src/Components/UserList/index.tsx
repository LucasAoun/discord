import React from 'react'
import {Container, User, Role, Avatar} from './styles'

interface UserProps{
  nickname: string
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
  <strong>{nickname}</strong>
  {isBot && <span>BOT</span>}
    </User>
  )
}

const UserList: React.FC = () =>{
    return(
      <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="LucasAoun" />

        <Role>Offline - 10</Role>
        <UserRow nickname="Nero_157" isBot/>
        <UserRow nickname="strAposBR"/>
        <UserRow nickname="FalleN"/>
        <UserRow nickname="luan NTC"/>
        <UserRow nickname="The Hook is GOD"/>
        <UserRow nickname="Dilminha"/>
        <UserRow nickname="TheAoun"/>
        <UserRow nickname="EORAFAA"/>
        <UserRow nickname="TheXama"/>
        <UserRow nickname="K4YO_KVR"/>
          
      </Container>
    )
};

export default UserList