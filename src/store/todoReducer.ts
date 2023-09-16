import * as React from "react";
import { State, Action, ActionType } from "../types/stateTypes";

export const todoReducer: React.Reducer<State, Action> = (state, action): State => {
    switch (action.type) {
        case ActionType.Add: {
            return {
                ...state, tasks: [...state.tasks, {
                    id: Math.max(0, Math.max(...state.tasks.map(({ id }) => id))) + 1,
                    name: action.payload,
                    isDone: false
                }]
            }
        }
        case ActionType.Remove: {
            return { ...state, tasks: [...state.tasks.filter((task) => task !== action.payload)] }
        }
        case ActionType.Toggle: {
            return { ...state, tasks: [...state.tasks.map((task) => (task !== action.payload ? task : { ...task, isDone: !task.isDone }))] }
        }
        default: throw new Error('Unexpected action');
    }
};