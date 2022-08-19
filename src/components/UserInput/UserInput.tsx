import React from 'react'
import { Center } from '@chakra-ui/react'
import { InputArea } from './InputArea/InputArea'
import { SubmitButton } from './SubmitButton/SubmitButton'

export const UserInput = React.memo(() => {
    return (
        <Center marginTop={'50px'}>
            <InputArea  />
            <SubmitButton />
        </Center>
    )
})