import React from 'react';
import { Button, Flex, Text, Spacer, Box, Heading, ButtonGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { DashBoardProps, ITodoState } from "../../../types/types";
import { changeDone } from '../../../todo/todoSlice';

export const DashBoard = React.memo((props: DashBoardProps) => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state: ITodoState) => state.todos);
    const printTasks = todos.filter((e) => e.done === props.isFinished);
    return (
        <Box
        border={'1px solid gray'}
        margin={'auto 30px'}
        borderRadius={'10px'}
        padding={'10px'}
        marginTop={'20px'}
        backgroundColor={props.backgroundColor}>
            <Text fontSize={'30px'}>
            {props.title}
            </Text>
            {printTasks.map((todo, index) =>{
                return (
                    <Flex
                    key={index}
                    minWidth='max-content'
                    alignItems='center'
                    gap='2'
                    border={'1px solid black'}
                    padding={'10px'}
                    margin={'10px 0'}
                    borderRadius={'10px'}
                    backgroundColor={'white'}>
                        <Box p='2'>
                        <Heading size='md'>{todo.todo}</Heading>
                        </Box>
                        <Spacer />
                        <ButtonGroup gap='2'>
                        <Button
                        colorScheme='teal'
                        onClick={() => dispatch(changeDone(todo.id))}>{props.buttonText}</Button>
                        </ButtonGroup>
                    </Flex>
                )
            })}
        </Box>
    )
})