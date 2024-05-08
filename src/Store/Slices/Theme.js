import { createSlice } from "@reduxjs/toolkit";
let initialState = { Theme : 'light' }
console.log(initialState)

const ThemeSlice = createSlice({
    name: 'Theme',
    initialState ,
    reducers : {
        changeTheme (state){ 
            console.log(';jahka')
        
            if ( document.body.style.backgroundColor !== 'rgb(0, 0, 0)'){
                document.body.style.backgroundColor = 'rgb(0, 0, 0)';
                document.body.style.color = 'rgb(255, 255, 255)';
                state.Theme = 'dark'
            }
            else{
                document.body.style.backgroundColor = 'rgb(255, 255, 255)';
                document.body.style.color = 'rgb(0, 0, 0)';
                state.Theme ='light'
            }
        }
       } 
        

})
console.log(initialState)

export const Themeactions = ThemeSlice.actions;
export default ThemeSlice.reducer;