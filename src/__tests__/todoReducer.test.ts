import {todoReducer} from "../store/todoReducer";
import {ActionType, Action, State} from "../types/stateTypes";
import {Task} from "../types/taskTypes";

describe('todoReducer',()=>{
    it('returns new state for "Add" type', () => {
        const initialState: State = {tasks: []};
        const updateAction: Action = {type: ActionType.Add, payload: 'new task'};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: '', tasks: [{name: 'new task', isDone: false}]});
    });

    it('returns new state for "Remove" type', () => {
        const task: Task = {id: 0, name: 'new task', isDone: false}
        const initialState: State = {tasks: [task]};
        const updateAction: Action = {type: ActionType.Remove, payload: task};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: '', tasks: []});
    });

    it('returns new state for "Toggle" type', () => {
        const task: Task = {id: 0, name: 'new task', isDone: false}
        const initialState: State = {tasks: [task]};
        const updateAction: Action = {type: ActionType.Toggle, payload: task};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({tasks: [{name: 'new task', isDone: true}]});
    });
})