import { ADD_WAREHOUSE, FAIL_REQUEST, GET_WAREHOUSE_LIST, MAKE_REQUEST, UPDATE_WAREHOUSE, GET_WAREHOUSE_OBJ } from "./ActionType"

const initialstate = {
    loading: true,
    warehouselist: [],
    warehouseobj: {},
    errormessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errormessage: action.payload
            }
        case GET_WAREHOUSE_LIST:
            return {
                ...state,
                loading: false,
                errormessage: '',
                warehouselist: action.payload,
                warehouseobj: {}

            }
        case ADD_WAREHOUSE:
            return {
                ...state,
                loading: false,


            }
        case UPDATE_WAREHOUSE:
            if (!action.updatedWarehouse) {
                return state; // If the updatedWarehouse is undefined, return the current state unchanged
            }
            const updatedWarehouses = state.warehouselist.map(warehouse => {
                if (warehouse.id === action.updatedWarehouse.id) {
                    return {
                        ...warehouse,
                        ...action.updatedWarehouse
                    };
                }
                return warehouse;
            });

            return {
                ...state,
                warehouselist: updatedWarehouses
            };

        case GET_WAREHOUSE_OBJ:
            return {
                ...state,
                loading: false,
                warehouseobj: action.payload


            }
        default: return state
    }
}