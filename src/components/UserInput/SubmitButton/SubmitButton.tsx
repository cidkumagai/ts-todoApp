import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react'
import { addTodo } from '../../../todo/todoSlice';
import { ITodoState } from '../../../types/types';

export const SubmitButton = React.memo(() => {
    const dispatch = useDispatch();
    const { todoInput } = useSelector((state: ITodoState) => state.todos);
    console.log(todoInput);
    return (
        <Button
        colorScheme={'blue'}
        width={'15%'}
        onClick={() => {
            if(todoInput !== '') {
                dispatch(addTodo(todoInput));
            }
        }}>
            追加
        </Button>
    )
})