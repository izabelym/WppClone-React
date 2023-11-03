import React, { useState } from 'react';
import './NewChat.css';

import { IoMdArrowRoundBack } from "react-icons/io";



export default ({user, chatList, show, setShow}) => {

    const [list, setList] = useState([
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'Russell' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'Oscar' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'Lando' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'Charles' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'Max' },
        { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'Alonso' },


    ]);

    const handleClose= () =>{
        setShow(false);
    }

    return (
        <div className='newChat' style={{left: show?0:-415}}>
            <div className='newChat-head'>

                <div onClick={handleClose} className='newChat-backbutton'>


                    <IoMdArrowRoundBack style={{ color: '#FFF' }} />

                </div>
                <div className='newChat-headtitle'>
                    Nova conversa
                </div>


            </div>
            <div className='newChat-list'>
                {list.map((item, key) => (
                    <div className='newChat-item' key={key}>
                        <img className='newChat-itemavatar' src={item.avatar} alt='' />
                        <div className='newChat-itemname'> {item.name} </div>
                    </div>
                ))}

            </div>

        </div>
    );

}