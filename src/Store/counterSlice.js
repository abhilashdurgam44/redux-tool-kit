import { createSlice } from "@reduxjs/toolkit";


 const counterSlice=createSlice({

     name:"counter",
     initialState:0,

     reducers:{

        add:(state)=>state+1,
        remove:(state)=>state-1
     }
 });

 export const {add,remove}=counterSlice.actions;

 export default counterSlice.reducer;