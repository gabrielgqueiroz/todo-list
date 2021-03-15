import styled from 'styled-components';
import { Fragment } from 'react';
//import ModalTask from './components/ModalTask';

const Top = styled.header`
    width: 100%;
    text-align: center;
    font-family: cursive;
    color: #333333;
`;
  
const CreateTask = styled.button`
    background: #c1c8e4;
    border-bottom: 2px solid #0099FF;
    color: #333333;
    font-size: 1.0rem;
    margin: 0px 10px 10px 0px;
    float: right;
  `;


export default function Header(){
    function handleClick(){

    }

    return (
        <Fragment>
        <CreateTask onclick={handleClick}>
            <p>Criar nova tarefa</p>
        </CreateTask>
        <Top>
            <h1>Tasks-list</h1>
        </Top>
        </Fragment>
    )
}
