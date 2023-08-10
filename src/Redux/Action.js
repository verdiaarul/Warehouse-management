import axios from "axios"
import { FAIL_REQUEST, MAKE_REQUEST, GET_WAREHOUSE_LIST, ADD_WAREHOUSE, GET_WAREHOUSE_OBJ, UPDATE_WAREHOUSE } from "./ActionType"
import { toast } from "react-toastify"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getWarehouseList = (data) => {
    return {
        type: GET_WAREHOUSE_LIST,
        payload: data
    }
}
export const addwarehouse = (data) => {
    return {
        type: ADD_WAREHOUSE,
        payload: data
    }
}
export const updateWarehouse = (updateWarehouse) => {
    return {
        type: UPDATE_WAREHOUSE,
        // payload: data
        updateWarehouse
    }
}
export const getWarehouseObj = (data) => {
    return {
        type: GET_WAREHOUSE_OBJ,
        payload: data
    }
}

export const FetchWarehouseList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/warehouse').then(res => {
            const warehouselist = res.data;
            dispatch(getWarehouseList(warehouselist))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}
export const AddNewWarehouse = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:8000/warehouse', data).then(res => {
            dispatch(addwarehouse());
            toast.success('Warehouse added successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FunctionUpdateWarehouse = (id, data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:8000/warehouse' + id, data).then(res => {
            dispatch(updateWarehouse());
            toast.success('Warehouse updated successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FetchWarehouseObject = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/warehouse' + id).then(res => {
            const warehouselist = res.data;
            dispatch(getWarehouseObj(warehouselist));
            toast.success('Warehouse updated successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}