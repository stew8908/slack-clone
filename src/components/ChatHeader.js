import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';

function ChatHeader() {
    return (
        <Container>
            chatHeader
            <DetailsContainer>
            Details
            <Details>
            <InfoIcon/>
            </Details>
            </DetailsContainer>
            
        </Container>
    )
}

export default ChatHeader

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 box-shadow: 0 1px 0 0 rgb(211,211,211);
 height:60px;
`
const DetailsContainer = styled.div`
    display: flex;
    
`
const Details = styled.div`
    color: grey;
    fill: white;
`