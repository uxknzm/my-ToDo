import React, { useContext, useEffect, useState } from 'react';
import { List, Radio } from 'antd';

import TodoItem from '../TodoItem';
import { ContextApp } from '../../App';

import { Task } from "../../types/taskTypes";
import { ActionType } from "../../types/stateTypes";

const TodoList = () => {
    const { state, changeState } = useContext(ContextApp);
    const [tasks, setTasks] = useState(state?.tasks || []);


    useEffect(() => {
        if (state) {
            setTasks(state.tasks);
        };
    }, [state]);

    const removeTask = (taskForRemoving: Task) => {
        changeState && changeState({ type: ActionType.Remove, payload: taskForRemoving })
    };
    const toggleReadiness = (taskForChange: Task) => {
        changeState && changeState({ type: ActionType.Toggle, payload: taskForChange })
    };

    const getComplitedTask = () => {
        if (state) {
            setTasks((prev) => state.tasks.filter((task) => task.isDone));
        };
    };

    const getAllTask = () => {
        if (state) {
            setTasks(state.tasks)
        };
    };

    const getUncomplitedTask = () => {
        if (state) {
            setTasks((prev) => state.tasks.filter((task) => !task.isDone));
        };
    }


    return (
        <React.Fragment>
            <Radio.Group>
                <Radio.Button onClick={getAllTask}>All</Radio.Button>
                <Radio.Button onClick={getComplitedTask}>Completed</Radio.Button>
                <Radio.Button onClick={getUncomplitedTask}>Uncomplited</Radio.Button>
            </Radio.Group>
            <List
                locale={{
                    emptyText: "There's nothing to do :(",
                }}
                dataSource={tasks}
                renderItem={(todo) => (
                    <TodoItem
                        todo={todo}
                        onTodoToggle={toggleReadiness}
                        onTodoRemoval={removeTask}
                    />
                )}
                pagination={{
                    position: 'bottom',
                    pageSize: 10,
                }}
            />
        </React.Fragment>
    );
};

export default TodoList;