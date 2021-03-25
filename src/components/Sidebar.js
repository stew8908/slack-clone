import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from '@material-ui/icons/Add';
import {sidebarItemsData} from "../data/SidebarData"
import db from '../firebase';
import {useHistory} from 'react-router-dom'

function Sidebar(props) {
    const history = useHistory();
    const gotoChannel = (id) => {
        if(id){
            console.log('pushing ' +id);
            history.push(`/room/${id}`);
        }
    }

    const addChannel = () => {
        const promptName = prompt('Enter Channel Name',"Yee yee")
        if(promptName) {
            db.collection("rooms").add({
                name: promptName
            })
        }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>BJR development</Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannel>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                        {item.icon}
                        {item.text}
                        </MainChannelItem>
                    ))
             
                }
            </MainChannel>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={()=>gotoChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
    
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #3F0E40;
`
const WorkspaceContainer = styled.div`
    color: white;
    height:64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
`
const Name = styled.div`
`
const NewMessage = styled.div`
    width:36px;
    height:36px;
    background:white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    margin-right: 20px;
    cursor: pointer;

`
const MainChannel = styled.div`
 
`

const MainChannelItem = styled.div`
color: rgb(188,171,188);
display: grid;
grid-template-columns: 15% auto;
height: 28px;
align-items: center;
padding-left: 19px;
cursor: pointer;
    :hover {
        background:#350D36;
    }

`
const ChannelsContainer = styled.div`
 color: rgb(188,171,188);
 margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left:19px;
    padding-right: 19px;
`
const ChannelsList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items:center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background:#350D36;
    }
`