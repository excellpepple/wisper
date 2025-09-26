import React from 'react';

function ChatItem({chat}) {
    return (
        <div className=' flex p-4 w-full  hover:bg-amber-800'>
            <h2 className='flex-none'>{(chat.name)? chat.name: chat.id}</h2>
            <p className='text-amber-400  text-right flex-auto'>{chat.type}</p>
        </div>
    );
}

export default ChatItem;