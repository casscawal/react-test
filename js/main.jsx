import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './Components/TodoList.jsx'
import TodoStore from './Components/TodoStore.jsx'

const app = document.getElementById("app");

ReactDOM.render(<TodoList store={TodoStore}/>, app);