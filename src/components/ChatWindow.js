import React, { useEffect, useState, useRef,} from 'react';
import './ChatWindow.css';
import MenssageItem from './MenssageItem'

import { BiSearchAlt, BiSolidSend } from "react-icons/bi";
import { IoMdAttach } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";




export default ({ user }) => {

    const body = useRef();

    const [text, setText] = useState('');

    const [list, setList] = useState([
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },

        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'bla bla ' },
        { autor: 123, body: 'bla bla bla' },
        { autor: 1234, body: 'bla ' },
        { autor: 123, body: 'nada ' },


    ]);

    useEffect(() => {

        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }

    }, [list]);



    return (
        <div className='chatWindow'>
            <div className='chatWindow-header'>

                <div className='chatWindow-headerinfo'>
                    <img className='chatWindow-avatar' src='https://cdn-icons-png.flaticon.com/512/3541/3541871.png' alt='' />
                    <div className='chatWindow-name'>Leiws</div>

                </div>

                <div className='chatWindow-headerbuttons'>

                    <div className='chatWindow-btn'>
                        <BiSearchAlt style={{ color: '#919191', width: 20, height: 20 }} />
                    </div>
                    <div className='chatWindow-btn'>
                        <IoMdAttach style={{ color: '#919191', width: 20, height: 20 }} />
                    </div>
                    <div className='chatWindow-btn'>
                        <FiMoreVertical style={{ color: '#919191', width: 20, height: 20 }} />
                    </div>
                </div>
            </div>

            <div ref={body} className='chatWindow-body'>
                {list.map((item, key) => (
                    < MenssageItem
                        key={key}
                        data={item}
                        user={user}

                    />
                ))}


            </div>



            <div className='chatWindow-footer'>

                <div className='chatWindow-pre'>

                    <div
                        className='chatWindow-btn'>
                        <MdOutlineEmojiEmotions style={{ color: '#919191', width: 20, height: 20 }} />


                    </div>

                </div>
                <div className='chatWindow-inputarea'>
                    <input className='chatWindow-input'
                        type='text'
                        placeholder='Digite uma mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}


                    />
                </div>

                <div className='chatWindow-pos'>

                    {text === '' &&
                        <div className='chatWindow-btn'>
                            <BsFillMicFill style={{ color: '#919191', width: 20, height: 20 }} />
                        </div>
                    }
                    {text !== '' &&
                        <div className='chatWindow-btn'>
                            <BiSolidSend style={{ color: '#919191', width: 20, height: 20 }} />
                        </div>
                    }
                </div>

            </div>



        </div>
    );
}