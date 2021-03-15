import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
`;
  
const ModalContent = styled.div`
    background-color: white;
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid black;
`;

export default function ModalTask() {
    return (
        <Modal>
            <ModalContent>
                <form>
                <h3>Register!</h3>
                <label>
                Name:
                <input type="text" name="name" />
                </label>
                <br />
                <input type="submit" />
                </form>
            </ModalContent>
        </Modal>
    )
}