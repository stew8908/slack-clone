import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
           <UserAvatar>
               <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
           </UserAvatar>
           <MessageContent>
           <Name>
                James Boyd
           </Name>
            <Text>
                This is cool
            </Text>
           </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`

`
const UserAvatar = styled.div`
`

const MessageContent = styled.div`
`
const Name = styled.span`

`
const Text = styled.span`

`