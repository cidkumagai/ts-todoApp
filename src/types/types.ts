export type TodoType = {
    id?: number
    todo?: string,
    done?: boolean,
};

export type ITodoState = {
    todos: {
        todos: TodoType[],
        todoInput: string,
    },
};

export type DashBoardProps = {
    title: string,
    buttonText: string,
    backgroundColor: string,
    isFinished: boolean
}
