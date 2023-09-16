import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { Task } from '../../types/taskTypes';

import styles from "./todoItem.module.css";

interface ITodoItemProps {
    todo: Task;
    onTodoRemoval: (todo: Task) => void;
    onTodoToggle: (todo: Task) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, onTodoToggle, onTodoRemoval }) => {
    return (
        <List.Item
            actions={[
                <Tooltip
                    title={todo.isDone ? 'Mark as uncompleted' : 'Mark as completed'}
                >
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={() => onTodoToggle(todo)}
                        defaultChecked={todo.isDone}
                    />
                </Tooltip>,
                <Popconfirm
                    title="Are you sure you want to delete?"
                    onConfirm={() => {
                        onTodoRemoval(todo);
                    }}
                >
                    <Button type="primary" danger>
                        X
                    </Button>
                </Popconfirm>,
            ]}
            className={styles.listItem}
            key={todo.id}
        >
            <div className={styles.todoItem}>
                <Tag color={todo.isDone ? 'cyan' : 'red'} className={styles.todoTag}>
                    {todo.name}
                </Tag>
            </div>
        </List.Item>
    );
};

export default TodoItem;