import React from 'react';
import styled from 'styled-components';

const AlertPopUpWrapper = styled.div`
    .notification-container {
        position: fixed;
        right: 3%;
        top: 6%;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 5px 5px #4a41414d;
    }
    .success-container {
        background: rgb(30, 169, 6);
        color: white;
    }
    .warning-container {
        background: rgb(208, 234, 12);
        color: rgb(14, 9, 9);
    }
    .error-container {
        background: red;
        color: white;
    }
`;

export const AlertPopUp = ({ message, state }) => {
    return (
        <AlertPopUpWrapper className={`notification-container ${state}-container`}>
            {message}
        </AlertPopUpWrapper>
    )
};