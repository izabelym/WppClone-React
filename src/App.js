import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';


import { BiCommentDetail } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdDonutLarge } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";



export default  () => {

  const [chatList, setChatList] = useState([
    { chatId: 1, title: 'fulano', image: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png' },
    { chatId: 2, title: 'fulano', image: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png' },
    { chatId: 3, title: 'fulano', image: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png' },
    { chatId: 4, title: 'fulano', image: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png' },

  ]);

  const [activeChat, setActiveChat] = useState({});

  const [user, setUser] = useState({
    id:123, 
    avatar:'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    name:'izabely',
  });

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }


  return (
    <div className='app-window'>

      <div className='sidebar'>
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <header>
          <img className='header-avatar' src={user.avatar} alt='' />
          <div className='header-buttons'>
            <div className='header-btn'>

              <MdDonutLarge style={{ color: '919191', width: 25, height: 25 }} />
            </div>

            <div onClick={handleNewChat} className='header-btn'>

              <BiCommentDetail style={{ color: '919191', width: 25, height: 25 }} />

            </div>
            <div className='header-btn'>

              <FiMoreVertical style={{ color: '919191', width: 25, height: 25 }} />
            </div>

          </div>

        </header>

        <div className='search'>

          <div className='search-input'>

            <BiSearchAlt style={{ color: '919191' }} />

            <input type='search' placeholder='Procurar ou começar uma nova conversa' />

          </div>


        </div>

        <div className='chatList'>
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />

          ))}

        </div>

      </div>

      <div className='contentarea'>

        {activeChat.chatId !== undefined &&

          <ChatWindow
            user={user}
          />

        }
        {activeChat.chatId === undefined &&

          <ChatIntro />

        }



      </div>

    </div>
  );
}