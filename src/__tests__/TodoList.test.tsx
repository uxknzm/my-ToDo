import * as React from 'react';
import {ContextApp} from "../App";

import {shallow} from "enzyme";
import {cleanup} from "@testing-library/react";

import TodoList from "../components/TodoList";
import {State} from "../types/stateTypes";

describe('<TodoList />',() => {

    afterEach(cleanup);

    const testState: State = {
        tasks: [{id: 0, name: 'test', isDone: false}, {id: 1, name: 'test2', isDone: false}]
    }

    const Wrapper = () => {
        return (
            <ContextApp.Provider value={{state: testState}}>
                <TodoList/>
            </ContextApp.Provider>
            )
    }

    it('renders the component without changes', () => {
        const component = shallow(<Wrapper/>);
        expect(component).toMatchSnapshot();
    });

})