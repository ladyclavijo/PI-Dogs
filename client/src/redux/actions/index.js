import axios from "axios";


export const getAllDogs = () => {
    return async(dispatch) => {
        try {
            let response = await axios.get("/dogs");
            return dispatch({
                type: "GET_ALL_DOGS",
                payload: response.data
            });
        } catch (error) {
            alert("I can't get all the Dogs", error.message)
        }
    }
};


export const getDogId = (id) => {
    return async(dispatch) => {
        try {
            let response = await axios.get(`/dogs/${id}`);
            return dispatch({
                type: "GET_DOGS_ID",
                payload: response.data
            })
        } catch (error) {
            alert("Dog not found", error.message)
        }
    }
};


export const getDogName = (name) => {
    return async(dispatch) => {
        try {
            let response = await axios.get(`/dogs?name=${name}`);
            return dispatch({
                type: "GET_DOGS_NAME",
                payload: response.data
            })
        } catch (error) {
            // alert(`The dog ${name} doesn't exist`, error.message)
        }
    }

};


export const getAllTemperaments = () => {
    return async(dispatch) => {
        try {
            let response = await axios.get("/temperaments");
            const allTemperaments = response.data;
            return dispatch({
                type: "GET_ALL_TEMPERAMENTS",
                payload: allTemperaments
            });
        } catch (error) {
            alert("The temperament doesn't exit", error.message)
        }
    }
};


export const filterByTemperaments = (payload) => { 
    return (dispatch) => {
        return dispatch({
            type: "FILTER_BY_TEMPERAMENTS",
            payload
        })
    }
};


export const createDog = (payload) => {
    return async(dispatch) => {
        try {
        let response = await axios.post("/dogs", payload);
        console.log(response)
        return dispatch({
            type: "CREATE_DOG",
            payload: response
        })
        }
        catch (error) {
            alert(error.message)
        }
    }    
};

 
export const orderByName = (payload) => {
    return(dispatch) => {
        return dispatch({
            type: "ORDER_BY_NAME",
            payload
        })
    }
};


export const orderByTemperament = (payload) => {
    return(dispatch) => {
            return dispatch({
                type: "ORDER_BY_TEMPERAMENT",
                payload
            })            
    }
};


export const filterBySource = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: "FILTER_BY_SOURCE",
            payload
        })
    }
}

  
export const currentPage = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: "CURRENT_PAGE",
            payload
        })
    }
};


export const clearDetail = () => {
    return (dispatch) => {
        return dispatch({
            type: "CLEAR_DETAIL"
        })
    }
};