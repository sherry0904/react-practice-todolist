import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../action/todoList"
import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid #ccc;
    box-shadow: 0 0 3px rgba(0,0,0,0.1) inset,0 0 5px rgba(0,0,0,0.1) inset;
    padding: 5px 10px;
    border: 5px;
    font-size: 16px;
    color: #505050;
    flex: 1;
`;

const Button = styled.button`
    border: none;
    background-color: #aac0fc;
    padding: 5px 10px;
    border-radius: 3px;
    color: #192750;
    font-weight: 500;
`;

const FormStyled = styled.div`
    text-align: left;
    width: 100%;
    border: none;
    background-color: transparent;
    display: flex;
`;

export default function Form() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        // inputRef.current.focus();
    }, []);


    function sendNewTodo() {
        dispatch(addTodo(newTodo))
        setNewTodo("");
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            dispatch(addTodo(newTodo));
            setNewTodo("");
        }
    }

    return ( 
        <FormStyled>
            <Input 
                value={ newTodo } 
                onChange={(e) => setNewTodo(e.target.value)} 
                ref={inputRef} 
                onKeyDown={handleKeyDown}/>  
            <Button onClick={() => {sendNewTodo()}}> 新增項目 </Button> 
        </FormStyled>
    )
}