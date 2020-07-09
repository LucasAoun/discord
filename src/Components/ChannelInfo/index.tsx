import React from 'react'
import {Container, HashtagIcon, Title, Separator, Description} from './styles'


const ChannelInfo: React.FC = () =>{
    return(
        <Container>
            <HashtagIcon/>
            <Title>Chat-Aberto</Title>
            <Separator/>
            <Description>Canal livre para conversas</Description>
        </Container>
    )
};

export default ChannelInfo