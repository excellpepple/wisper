import React from 'react';
import MessageField from './messageField';


function Chatfeed(props) {
    

    return (
        <div className='h-screen w-full relative ' >
            <div id="Messages"></div>
            <MessageField/>
        </div>
    );
}

export default Chatfeed;