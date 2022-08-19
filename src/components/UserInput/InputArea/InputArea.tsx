import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onChange } from '../../../todo/todoSlice';
import { ITodoState } from '../../../types/types';
import { Input } from '@chakra-ui/react';

export const InputArea = React.memo(() => {
    const dispatch = useDispatch();
    const { todoInput }= useSelector(((state: ITodoState) => state.todos));
    return (
        <Input
        placeholder='タスクを入力'
        value={todoInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(onChange(e.target.value))}
        width={'80%'}
        marginRight={'20px'}
        />
    )
})