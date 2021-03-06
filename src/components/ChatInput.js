import React, {useState} from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function ChatInput({sendMessage}) {
    const [input,setInput] = useState("");
    const send = (e) =>{
        e.preventDefault();
        if(!input) return
        sendMessage(input);
        setInput("")
    }
    return (
        <Container>
            <InputContainer>
            <form>
                <input onChange={(e)=>setInput(e.target.value)}
                type="text" 
                value={input}
                placeholder="Message"/>
                <SendButton 
                    type="Submit"
                    onClick={send}>
                    <Send/>
                </SendButton>
            </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;
    form{
        display:flex;
        height: 42px;
        align-items: center;
        padding-left:10px;
        input{
            flex: 1;
            border:none;
            font-size:13px;
        }
        input:focus{
            outline:none;
        }
    }
`
const SendButton = styled.button`
    background:#007a5a;
    border-radius:2px;
    width:32px;
    height:32px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    .MuiSvgIcon-root{
        width:18px;
    }
    :hover{
        background-color: #145867;
    }
`
const Send = styled(SendOutlinedIcon)`
    color:#D9D9D9;
`