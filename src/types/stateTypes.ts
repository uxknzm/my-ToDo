import {Task, Tasks} from "./taskTypes";
import {Dispatch} from "react";

export type State = {
    tasks: Tasks
}

export enum ActionType {
    Add = 'Add',
    Remove = 'Remove',
    Toggle = 'Toggle',
}

type ActionStringPayload = {
    type: ActionType.Add,
    payload: string
}

type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove,
    payload: Task
}

export type Action = ActionStringPayload | ActionObjectPayload;

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>
}