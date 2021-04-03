import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { CgClose } from 'react-icons/cg';
import { GiHealthNormal } from 'react-icons/gi';


import ModalWrapper, {
  StyledModal,
} from './Modal.styled';

function ModalDisplay({
  onHide,
  ...props
}) {
  const body = (
    <div className="covid-writing">
      Hi Friends and Family!
      <br /><br />
      What a year!
      <br /><br />
      Currently, San Diego county is open, but there is a requirement for masks in public and indoor facilities. Luckily for us, our venue is half indoors and half outdoors. The indoor section has giant sliding doors all around, so we plan to keep them open for fresh air to flow in and out. Please have a mask handy in case, but masks are not mandatory for our wedding celebration.
      <br /><br />
      We understand that Covid-19 is still (unfortunately) a thing, and we respect everyone’s comfort levels being in public and around others. We have reduced our guest count down, but we still understand that if you are uncomfortable, we respect the decision if you cannot make our wedding in person.
      <br /><br />
      We hope by August 6th, things will slowly be going towards normalcy again. We are both vaccinated, but we will also be taking precautions in the weeks before our big day.
      <br /><br />
      Again, we hope to see you all there, and we are SO EXCITED TO CELEBRATE OUR LOVE FINALLY!
      <br /><br />
      Much love,<br/>
      Siobhan and Glenn
    </div>
  );

  // switch StyleModal class name to animate__slideOutRight on onLoaded

  return (
    <ModalWrapper data-testid="shopping-cart-modal-wrapper">
      <StyledModal
        id="shopModal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        data-testid="shopping-cart-modal"
        onHide={() => onHide(false)}
        // dialogClassName=" animate__animated animate__slideInRight"
      >
        <Modal.Header>
          <span className="modal-header-title">
           <GiHealthNormal className="icon" /> Covid-19 Updates
          </span>
          <div className="close-button">
            <CgClose onClick={() => onHide(false)} />
          </div>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer />
      </StyledModal>
    </ModalWrapper>
  );
}


export default ModalDisplay;
