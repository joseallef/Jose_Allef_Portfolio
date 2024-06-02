// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
// import React from 'react';
// import styled, { createGlobalStyle, css } from 'styled-components';
// import { StateModal } from '../../wrappers/context';

// const FormWrapper = styled.div`
//   position: fixed;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   flex-direction: column;
//   align-items: stretch;
//   background: rgba(0,0,0,0.5);
//   margin: auto;
//   overflow: hidden;
//   transition: .3s;
//   z-index: 100;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   margin: auto;
  

//   ${({ isOpen }) => {
//     if (isOpen) {
//       return css`
//       opacity: 1;
//       pointer-events: all;
//     `;
//     }

//     return css`
//     opacity: 0;
//     pointer-events: none;
//   `;
//   }}
 
// `;

// const Scroll = createGlobalStyle`
// html, body {
//     overflow-y: hidden;
//   }
// `;
// function Modal({ isOpen, onClose, children }) {
//   const [isModalOpen, setModalState] = React.useState(isOpen);
//   return (
//     <StateModal.Provider
//       value={{
//         teste: true,
//         toggleModal: () => {
//           setModalState(isModalOpen);
//         },
//       }}
//     >
//       <FormWrapper
//         isOpen={isOpen}
//         onClick={(event) => {
//           const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
//           if (!isSafeArea) {
//             onClose();
//           }
//         }}
//       >
//         {isOpen && <Scroll />}
//         <motion.div
//           variants={{
//             open: {
//               x: 0,
//             },
//             closed: {
//               y: '100%',
//             },
//           }}
//           animate={
//             isOpen ? 'open' : 'closed'
//           }
//           transition={{
//             duration: 0.8,
//           }}
//           style={{
//             display: 'flex',
//             flex: 1,
//           }}
//         >
//           {children({
//             'data-modal-safe-area': 'true',
//           })}
//         </motion.div>
//       </FormWrapper>
//     </StateModal.Provider>
//   );
// }

// Modal.propTypes = {
//   isOpen: PropTypes.bool,
//   onClose: PropTypes.func,
//   children: PropTypes.func,
// };

// export default Modal;
