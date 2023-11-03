import React from 'react';
import './ChatListItem.css';


export default ({onClick, active, data}) => {
    return (
        <div 
        className={`chatListItem ${active? 'active':''}`}
        onClick={onClick}
        >

            <img className='chatList-Avatar' src={data.image} alt='' />

            <div className='chatList-Lines'>

                <div className='chatList-Line'>

                    <div className='chatList-name'>
                        {data.title}
                    </div>

                    <div className='chatList-date'>
                        19:07
                    </div>



                </div>

                <div className='chatList=-Line'>  </div>

                <div className='chatList-Msg'>
                    <p> Menssagem teste  </p>
                </div>




            </div>

        </div>
    );
}