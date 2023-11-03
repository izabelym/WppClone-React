import React from 'react';
import './MenssageItem.css';

export default ({ data, user }) => {
    return (
        <div
            className='menssageLine'

            style={{
                justifyContent: user.id == data.autor ? 'flex-end': 'flex-start',
            }} >



            <div 
            className='menssageItem'
            style={{
                backgroundColor:user.id == data.autor ? '#DCF8C6' : '#FFF',
            }}
            >

                <div className='menssageText'>
                    {data.body}
                </div>
                <div className='menssageDate'>
                    23:54
                </div>

            </div>

        </div>
    )
}
