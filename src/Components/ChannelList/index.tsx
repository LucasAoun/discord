import React from 'react'
import {Container, Category, AddCategoryIcon} from './styles'
import ChannelButton from '../ChannelButton'


const ChannelList: React.FC = () =>{
    return(
      <Container>
         <Category><span>Canais de texto</span>
           <AddCategoryIcon />
         </Category>

    <ChannelButton channelName="League of Legends"/>
    <ChannelButton channelName="CS:GO"/>
    <ChannelButton channelName="Warzone"/>
    <ChannelButton channelName="Battlefield 4"/>
    <ChannelButton channelName="Valorant"/>
    <ChannelButton channelName="Paladins"/>


      </Container>
    )
};

export default ChannelList