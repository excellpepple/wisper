import React from 'react';

function ChatItem({chat}) {
    return (
        <div className=' flex p-4 w-full  hover:bg-gray-200'>
            <h2 className='flex-none'>{(chat.name)? chat.name: chat.id}</h2>
            <p className='text-slate-800  text-right flex-auto'>{chat.type}</p>
        </div>
    );
}

export default ChatItem;