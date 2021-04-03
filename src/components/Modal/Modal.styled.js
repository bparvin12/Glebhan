import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const StyledModal = styled(Modal)`
  background-color: transparent;
  padding: 0;
  margin: 0;
  height: 100vh;
  border-radius: 0;
  min-width: unset;
  max-width: unset;
  z-index: 1040;
  .modal-dialog {
    width: 90%;
    max-width: 600px;
    left: 100vw;
    margin: auto 0 0 auto;
    border-radius: 0;
    align-items: flex-end;
    max-width: 100%;
  }
  /*
    this portion removed for dev becasue it was breaking footer of
    shopping cart modal in safari
   */
  &.fade .modal-dialog {
    transition: left 0.4s ease-out;
  }

  &.show .modal-dialog {
    left: 0;
  }
  .modal-content {
    min-height: 100vh;
    .modal-header {
      position: sticky;
      background-color: var(--metaGreen);
      width: 100%;
      /* max-width: 600px; */
      border-radius: 0;
      z-index: 2;
      color: var(--white);
      top: 0;

      .modal-header-title {
        margin: 0 auto;
        font-size: 1.3rem;
        font-weight: 700;
        width: 100%;
        display: flex;
        align-items: center;
        .items {
          font-size: 1rem;
          font-weight: 400;
          text-transform: capitalize;
          padding-left: 0.6rem;
        }
      }
      .icon {
        margin-right: 0.5rem;
      }
      .close-button {
        color: var(--white);
        font-size: 1.5rem;
        svg {
          cursor: pointer;
          margin-bottom: 0.5rem;
        }
        &:hover {
          color: var(--mediumLight);
        }
      }
      button {
        right: 20px;
        color: var(--white);
      }
    }
    .modal-body {
      min-height: 100%;
      .covid-writing {
      }
    }
    border-radius: 0;
    border: 0;
  }
  .modal-footer {
    position: sticky;
    width: 100%;
    border-radius: 0;
    z-index: 4;
    display: block;
    bottom: 0;
    will-change: transform;
    background-color: var(--metaGreen);
  }
  .shoppingFooter {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    max-width: 600px;
  }
  .continue-shopping {
    display: none;
  }

  /* On screens that are 830px or bigger */
  @media (min-width: 830px) {
    .modal-dialog {
      width: 90%;
    }
    .modal-content {
      .modal-header {
        .modal-header-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 400;
          text-align: left;
        }
      }
      .modal-body {
        display: grid;
      }
    }
  }

  /* On screens that are 1240px or bigger */
  @media (min-width: 1240px) {
    .modal-dialog {
      width: 75%;
      max-width: 1200px;
    }
  }
`;
export default styled.div``;
