import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button, Input } from 'antd';

import { ContextApp } from '../../App';
import { ActionType } from "../../types/stateTypes";

import styles from "./newTodo.module.css";

const NewTodo: React.FC = () => {
    const [form] = Form.useForm();
    const { changeState } = useContext(ContextApp);
    const [todo, setTodo] = useState("");

    const addTask = () => {
        changeState && changeState({ type: ActionType.Add, payload: todo });
        setTodo("");        
        form.resetFields();
    };

    const onChageStatic = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    };

    return (
        <Form
            form={form}
            onFinish={addTask}
            layout="horizontal"
            className={styles.todoForm}
        >
            <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item
                        name={'name'}
                        rules={[{ required: true, message: 'This field is required' }]}
                    >
                        <Input onChange={onChageStatic} value={todo} placeholder="What needs to be done?" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type="primary" htmlType="submit" block>
                        Add todo
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default NewTodo;