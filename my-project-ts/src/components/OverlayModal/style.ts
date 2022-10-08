import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.colors.opacity};
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  padding: 30px 10px 20px 10px;
  min-width: 250px;
  min-height: 200px;
  max-width: 700px;
  max-height: 450px;
  background: ${theme.colors.color3};
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px ${theme.colors.shadowColor};

  .modal__close {
  font-size: 1em;
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  color: white;
  transition: all 1s;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.modal__close:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
`;

export const ModalBody = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;