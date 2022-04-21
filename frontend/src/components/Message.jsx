import {ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed'
import { useNavigate } from "react-router-dom";
import Header from './Header';

export const Message = (props) => {
    console.log(props);
    
    return (
        <div>
            <Header/>
            <ChatEngine
                height = "100vh"
                projectID = "d84aadd4-ad67-4b0b-b507-415a6fb05ae2"
                userName = {props.username}
                userSecret = {props.password}
                renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}

                />
            </div>
    ) 
    
}
export default Message;