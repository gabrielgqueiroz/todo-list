import Task from './components/Tasks.js'
import Header from './components/Header.js';
import './App.css';
import { Fragment, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  const [tasks, setTasks] = useState([
    {title: 'Teste1', desc:'isso é um teste', status:'todo'},
    {title: 'Teste2', desc:'isso é um teste', status:'todo'},
    {title: 'Teste3', desc:'isso é um teste', status:'doing'},
    {title: 'Teste4', desc:'isso é um teste', status:'doing'},
    {title: 'Teste5', desc:'isso é um teste', status:'doing'},
    {title: 'Teste6', desc:'isso é um teste', status:'done'},
    {title: 'Teste7', desc:'isso é um testedsdadsdadasaaaa', status:'done'}
  ]);
  const [seenModal] = useState([
    {seen:false}
  ])

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: #c1c8e4;
  }
`;

  return (
    <Fragment>
    <GlobalStyle/>
      <Header/>
      <Task tasks={tasks}/>
    </Fragment>
  );
}

export default App;
