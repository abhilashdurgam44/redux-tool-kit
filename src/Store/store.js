import { configureStore } from "@reduxjs/toolkit";

 import counterReducer from './counterSlice'

        configureStore({

            reducer:{
                counter:counterReducer,
            }
        })

        export default store;