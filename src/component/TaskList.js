import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector ,useDispatch } from 'react-redux';
import { removeTodo } from '../action/todoList';

const List = styled.ul`
    padding-left: 0;
    width: 100%;
`;

const Item = styled.li`
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1),  0 3px 5px rgba(0,0,0,0.1);
    background-color: #fff;
    padding: 5px 10px;
    list-style: none;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #4b4949;
    font-weight: 500;
    button {
        border: none;
        background-color: #979797;
        color: #fff;
    }
`;

export default function TaskList({todoList}) {
    const dispatch = useDispatch();

    const removeItem = (text)=>{
        console.log(text)
        dispatch(removeTodo(text));
    }

    // useEffect(()=>{
    //     console.log(todoList)
    // },[todoList]);

    if(!todoList) {
            return (
                <p>無</p>
            )
    }else {
        return (
            
            <List>
                {
                    todoList.map(task => {
                    return (
                        <Item key={task}>
                            {task}
                            <button onClick={()=>removeItem(task)}>刪除</button>
                        </Item>
                    )
                    })
                }
            </List>
        )
    }
}
