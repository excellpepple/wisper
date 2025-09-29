import React from 'react';

function MessageField(props) {
    return (
        <form onSubmit={e=> e.preventDefault()} className='absolute bottom-0 left-0 right-0 bg-gray-400/50 p-4 flex items-center gap-2'>
            <input className='flex-1 p-2' type='text' placeholder='Enter Message here...'/>
            <button className='px-4 py-2 bg-amber-100 rounded'> send</button>
        </form>
    );
}

export default MessageField;