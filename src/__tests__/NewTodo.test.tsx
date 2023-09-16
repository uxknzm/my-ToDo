import * as React from 'react';
import {ContextApp} from "../App";
import {shallow} from "enzyme";
import {cleanup } from "@testing-library/react";
import {renderHook } from '@testing-library/react-hooks';

import {useReducer} from "react";
import {todoReducer} from "../store/todoReducer";

import NewTodo from "../components/NewTodo";
import {State, ContextState} from "../types/stateTypes";

describe('<NewTodo />',() => {

    afterEach(cleanup);

    const testState: State = {
        tasks: []
    }

    const { result } = renderHook(()=> useReducer(todoReducer, testState));
    const [state, changeState] = result.current;

    const ContextState: ContextState = {
        state,
        changeState
    };

    const wrapper =
        <ContextApp.Provider value={ContextState}>
            <NewTodo/>
         </ContextApp.Provider>;

    it('renders the component without changes', () => {
        const component = shallow(wrapper);
        expect(component).toMatchSnapshot();
    });

})