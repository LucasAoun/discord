import React from 'react'
import {Container, Separator} from './styles'
import ServerButton from '../ServerButton'

const ServerList: React.FC = () =>{
    return(
        <Container>
            <ServerButton isHome/>
            <Separator/>
            <ServerButton/>
            <ServerButton hasNotification/>
            <ServerButton mentions={10}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotification/>
            <ServerButton mentions={75}/>
            <ServerButton/>
            <ServerButton hasNotification/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton mentions={89}/>
            <ServerButton/>
            <ServerButton/>
        </Container>
    )

};

export default ServerList