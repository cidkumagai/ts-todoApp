import React from 'react';
import { DashBoard } from './Dashboard/DashBoad';

export const PrintArea = React.memo(() => {
    const unFinishedTask = {
        title: '未達成のタスク',
        buttonText: '達成済みにする',
        backgroundColor: 'blue.100',
        isFinished: false,
    };
    const finishedTask = {
        title: '達成済みのタスク',
        buttonText: '未達成にする',
        backgroundColor: 'red.100',
        isFinished: true,
    }
    return (
        <React.Fragment>
            <DashBoard  {...unFinishedTask}/>
            <DashBoard  {...finishedTask}/>
        </React.Fragment>
    )
})