import React from 'react';

function MenuBar(props) {
    return (
        <div className='bg-indigo-900/10 top-0 h-screen w-24 p-4 overflow-visible backdrop-blur-lg border-r-4 border-gray-400'>
            <nav className='flex flex-col h-full'>
                <button className='mt-10'>Chats</button>
                <button className='mt-10'>Contacts</button>

                <div className='mt-auto mb-4 flex flex-col items-center'>
                    <button className='mt-10'>settings</button>
                    <button className='mt-10'>profile</button>
                </div>
            </nav>
        </div>
    );
}

export default MenuBar;