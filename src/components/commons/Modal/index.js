import React from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';
import Proptype from 'prop-types';
import { motion } from 'framer-motion';

const FormWapper = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: stretch;
    background: rgba(0,0,0,0.1);
    margin: auto;
    overflow: hidden;
    transition: .3s;
    z-index: 100;
    text-align: center;
    color: #fff;

    ${({ isOpen }) => {
        if(isOpen){
            return css`
                opacity: 1;
                pointer-events: all;
            `;
        }

        return css`
            opacity: 0;
            pointer-events: none;
        `;
    }}
 
`;

const Scroll = createGlobalStyle`
html, body {
        overflow-y: hidden;
    }
`;


function Modal({isOpen, onClose, children}){
    return (
        <FormWapper
            isOpen={isOpen}
            onClick={(event) =>{
                const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
                if(!isSafeArea){
                    onClose();
                }

            }}
        >
            {isOpen && <Scroll />}
            <motion.div
            
            variants={{
                open:{
                    x:0,
                },
                closed: {
                    y: '100%',
                },
            }}
            
            animate={
                isOpen ? 'open' : 'closed'
            }
            transition={{
                duration: .8,
            }}

            style={{
                display: 'flex',
                flex: 1,
            }}            
            >
                {children({
                    'data-modal-safe-area': 'true',
                })}
            </motion.div>
        </FormWapper>
    )
}

Modal.Proptype = {
    isOpen: Proptype.bool,
    onClose: Proptype.func,
    children: Proptype.func,
}

export default Modal;