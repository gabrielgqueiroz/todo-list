import styled from 'styled-components';
import { Fragment } from 'react';

const Card = styled.div`
    margin: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 90%;
    float: left;
    border-radius: 5px;
    color: #333333;
    font-family: cursive;
    text-margin: px;
`;

const CardTodo = styled(Card)`
    background-color: #84ceeb;
`;
  
const CardDoing = styled(Card)`
    background-color: #5ab9ea;
`;

const CardDone = styled(Card)`
    background-color: #5680e9;
`;

const Container = styled.div`
    margin: 5px;
    width: 32%;
    display: inline-block;
    color: #333333;
`;

const TextMargin = styled.div`
    p {
        font-family: Georgia;
    }
    margin: 15px;
`;

export default function Task(tasks) {
    function handleClick(){
        
    }
    return (
        <div style={{margin: '40px'}}>
        <Container>
            <h3>To-do</h3>
            {tasks.tasks.map((task) => (
                task.status === 'todo'? 
                    <CardTodo onclick={handleClick}>
                        <TextMargin>
                            <h4>{task.title}</h4>
                            <p>{task.desc}</p>
                        </TextMargin>
                    </CardTodo>:
                    <></>
            ))}
        </Container>
        <Container>
            <h3>Doing</h3>
            {tasks.tasks.map((task) => (
                task.status === 'doing'? 
                    <CardDoing>
                        <TextMargin>
                            <h4>{task.title}</h4>
                            <p>{task.desc}</p>
                        </TextMargin>
                    </CardDoing>:
                    <></>
            ))}
        </Container>
        <Container>
            <h3>Done</h3>
            {tasks.tasks.map((task) => (
                task.status === 'done'? 
                    <CardDone>
                        <TextMargin>
                            <h4>{task.title}</h4>
                            <p>{task.desc}</p>
                        </TextMargin>
                    </CardDone>:
                    <></>
            ))}
        </Container>  
        </div>
    )
}
