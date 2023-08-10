import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";
import logger from "redux-logger";

const rootreducer = combineReducers({ warehouse: Reducer })
const Store = configureStore({ reducer: rootreducer, middleware: [thunk, logger] })

export default Store;