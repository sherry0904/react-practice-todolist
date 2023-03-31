import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../reducer/todoList'

const store = configureStore({reducer: todoListReducer});

export default store;