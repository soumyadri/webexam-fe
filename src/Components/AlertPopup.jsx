import React from 'react';

export const AlertPopUp = ({ message, state }) => {
    return (
        <div className={`fixed z-50 top-[5%] right-[4%] px-5 py-2 rounded-lg ${state === 'success' ? 'bg-green-500' : state === 'warning' ? 'bg-yellow-500' : 'bg-red-500'} text-white`}>
            {message}
        </div>
    )
};