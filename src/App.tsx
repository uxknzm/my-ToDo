import React, { useReducer } from 'react';
import { Action, State, ContextState } from "./types/stateTypes";
import { todoReducer } from "./store/todoReducer";
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

import styles from "./App.module.css";

export const initialState: State = {
  newTask: '',
  tasks: []
}
export const ContextApp = React.createContext<Partial<ContextState>>({});

function App() {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

  const ContextState: ContextState = {
    state,
    changeState
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todos</h1>
      <ContextApp.Provider value={ContextState}>
        <NewTodo />
        <TodoList />
      </ContextApp.Provider>
    </div>
  );
}

export default App;
