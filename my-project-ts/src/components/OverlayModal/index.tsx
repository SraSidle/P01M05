import * as S from "./style";

type OverlayModalProps = {
  children: any,
  closeModal: any,
} 


function OverlayModal({children, closeModal} : OverlayModalProps) {

  const handleClick = (event: any, canClose: any) => {
    event.stopPropagation();
    if(canClose) closeModal();
  }

  return(
    <S.Overlay onClick={() => closeModal()}>
       <S.Modal onClick={handleClick}> {/*  */}
        <span className="modal__close" onClick={(event) => handleClick(event, false)}>{/*  */}
        <i className="bi bi-x"></i>
        </span>
        <S.ModalBody>
          {children}
        </S.ModalBody>
      </S.Modal>
    </S.Overlay> 
  );
}

export default OverlayModal;