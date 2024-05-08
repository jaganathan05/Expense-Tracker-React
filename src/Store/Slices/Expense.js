import { createSlice } from "@reduxjs/toolkit";
let initialState = { Expenses : null  , TotalAmount : 0 , premium : false}
console.log(initialState)

const ExpenseSlice = createSlice({
    name: 'Expense',
    initialState ,
    reducers : {
        addpremium (state,action){
            state.premium = true
                    },
        InitialExpenses(state,action ){
       state.Expenses = action.payload 
       state.TotalAmount = action.payload.reduce((total, expense) => {
        return total + Number(expense.value.Amount);
      }, 0);
        }} ,
        

})
console.log(initialState)

export const Expenseactions = ExpenseSlice.actions;
export default ExpenseSlice.reducer;