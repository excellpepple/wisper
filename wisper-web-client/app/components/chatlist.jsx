import React from 'react';
import ChatItem from './chatitem';
import chatData from "../chat_dummy_data.json";



function Chatlist(props) {
    
    let conversations = chatData.conversations;
    const chatItems = conversations.map(chat => <ChatItem  key={chat.id} chat={chat} />)
            
    
    return (
        <ul className='top-0 h-screen w-80  border-r-2 '>{chatItems}</ul>
    );
}

export default Chatlist;