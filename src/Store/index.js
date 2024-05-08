import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Slices/Auth'
import ThemeReducer from './Slices/Theme'
import ExpenseReducer from './Slices/Expense'
const store = configureStore({
  reducer:{  Auth : AuthReducer , Expense : ExpenseReducer , Theme : ThemeReducer } 
});



export default store;