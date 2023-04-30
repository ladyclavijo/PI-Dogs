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
            aler ("I can't get all the Dogs", error.message)
        }
    }
};


export const getDogID = (id) => {
    return async(dispatch) => {
        try {
            let response = await axios.get(`/dogs/${id}`);
            const dogId = response.data;
            return dispatch({
                type: "GET_DOG_ID",
                payload: dogId
            })
        } catch (error) {
            alert ("I can't get that Dog", error.message)
        }
    }
};


export const getDogName = (name) => {
    return async(dispatch) => {
        try {
            let response = await axios.get(`/dogs?name=${name}`);
            const dogName = response.data;
            return dispatch({
                type: "GET_DOG_NAME",
                payload: dogName
            });
        } catch (error) {
            alert (`The Dog "${name}" doesn't exist`, error.message)
        }
    }
};


export const getAllTemperaments = () => {
    return async(dispatch) => {
        try {
            let response = await axios.get(`/temperaments`);
            const AllTemps = response.data;
            return dispatch({
                type: "GET_ALL_TEMPERAMENTS",
                payload: AllTemps
            });
        } catch (error) {
            alert ("I can't get all the temperaments", error.message)            
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


export const createDog = (payload) => { //payload es un obj q contiene info sobre el dog que se va a crear
    return async(dispatch) => {
        let response = await axios.post("/dogs", payload); //payload es el obj q contiene info sobre el dog
        return dispatch({
            type: "CREATE_DOG",
            payload: response //payload es la accion q se devuelve, es la respuesta que contiene
                            // info sobre el dog recien creado
        })
    }
};

export const orderByName = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: "ORDER_BY_NAME",
            payload
        })
    }
};


export const orderByTemperament = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: "ORDER_BY_TEMPERAMENT",
            payload
        })
    }
};


export const currentPage = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: "CURRENT_PAGE",
            payload
        })
    }
}