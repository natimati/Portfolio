import { useContext, useEffect } from "react"
import { ModalContext } from "../../context/ModalContextProvider";
import { CloseButton, ModalContent, ModalOverlay, StyledModal } from "./style";


function Modal() {
  const modalContext = useContext(ModalContext);
  
  useEffect(() => {
    if (modalContext.displayedComponent) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [modalContext.displayedComponent]);
  
    if (!modalContext.displayedComponent) {
        return null
  }
  
    return (
      <>
      <ModalOverlay
        onClick={() => {
          modalContext.setDisplayedComponent(null);
            }}
        />
            
      <StyledModal>
        <CloseButton onClick={() => {
          modalContext.setDisplayedComponent(null);
        }}
        >
          <img alt="close button" src="assets/close_icon.svg" />
        </CloseButton>
        <ModalContent>
          {modalContext.displayedComponent}
        </ModalContent>
      </StyledModal>
    </>
  );
}

export default Modal;