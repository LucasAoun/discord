import React from 'react'
import ChannelMessage, {Mention} from '../ChannelMessage'
import {Container, Messages, InputWrapper, Input, InputIcon,} from './styles'


const ChannelData: React.FC = () =>{
    return(
      <Container>
        <Messages>
          <ChannelMessage
            author="LucasAoun"
            date="09/07/2020"
            content="It's my birthday!!!"
          />
          <ChannelMessage
            author="LucasAoun"
            date="09/07/2020"
            content="Bem-vindos ao meu servidor, fiquem a vontade!!"
          />
          <ChannelMessage
            author="strAposBR"
            date="09/07/2020"
            content="Bora jogar uma partidinha de Valorant"
          />
          <ChannelMessage
            author="ORAFAAA"
            date="09/07/2020"
            content="AGUA COCA LATAAAAAO"
          />
          <ChannelMessage
            author="ORAFAAA"
            date="09/07/2020"
            content="TEM RECK CHEQUE, JACK CHAIN"
          />
         

          <ChannelMessage
            author="Nero_157"
            date="09/07/2020"
            content={<>
              <Mention>LucasAoun</Mention> Você joga demais, sou seu fã
            </>
            }
            hasMention
            isBot
          />
        </Messages>

        <InputWrapper>
          <Input type="text" placeholder="Conversarem #chat-livre"/>
          <InputIcon/>
        </InputWrapper>
      </Container>
    )
};

export default ChannelData