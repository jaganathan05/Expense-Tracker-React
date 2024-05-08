import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Slices/Auth'
import ExpenseReducer from './Slices/Expense'
const store = configureStore({
  reducer:{  Auth : AuthReducer , Expense : ExpenseReducer } 
});



export default store;