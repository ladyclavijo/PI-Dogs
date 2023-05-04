const initialState = {  //el initialState se guarda en el store
    // objeto de estados globales
        dogs: [], // muestra todos los dogs // renderiza la info de home // cuando hago el llamado por name, lo guardo aqui
        copyDogs: [], // para comparar -- este estado no se toca
        temperaments: [],   
        detail: [] // guardo 1 solo dog, para mostrar detalle (id)
    };
    
    function rootReducer (state= initialState, action) {
        switch(action.type) {
            case "GET_ALL_DOGS":
                return{
                    ...state,
                    dogs: action.payload,
                    copyDogs: action.payload
                };
    
            case "GET_DOGS_ID":
                return{
                    ...state,
                    detail: action.payload
                };
    
            case "GET_DOGS_NAME":
                return{
                    ...state,
                    dogs: action.payload
                };
    
            case "GET_ALL_TEMPERAMENTS":
                return{
                    ...state,
                    temperaments: action.payload,
                };
    
            case "FILTER_BY_TEMPERAMENTS": 
                const allDogTemps = state.copyDogs;
                const filterDogTemps = action.payload === "all" 
                ? allDogTemps.filter(e => e.temperaments.length > 0) 
                : allDogTemps.filter(e => e.temperaments.find(e => e.name ? e.name === action.payload : e === action.payload))
                return{
                    ...state,
                    dogs: filterDogTemps
                };
    
    
            case "CREATE_DOG":
                const allDogsCreated = state.dogs;
                const createdFilter = action.payload === "createdDB" 
                ? allDogsCreated.filter(e => e.createdDB === true)
                : allDogsCreated.filter(e => e.createdDB === false);
                return{
                    ...state,
                    dogs: action.payload === "all" ? allDogsCreated : createdFilter
                };
    
    
            case "ORDER_BY_NAME":
                const orderingByName = action.payload === "asc" ?
                state.dogs.sort((a, b) => { //  [...state.dogs]   ????????????
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    if(b.name.toLowerCase() > a.name.toLowerCase()) return -1
                    return 0
                })
                :
                state.dogs.sort((a, b) => { //    [...state.dogs]   ??????????
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    if(b.name.toLowerCase() > a.name.toLowerCase()) return 1
                    return 0
                })
                return {
                    ...state,
                    dogs: orderingByName
                };


            case "FILTER_BY_SOURCE":
                const allDog2 = state.allDogs
                const filterDog2 = action.payload === "DB" ? allDog2.filter(d => d.createdDB)
                : allDog2.filter(d => !d.createdDB)
                return{
                    ...state,
                    dogs: filterDog2,
                };

                            
            case "CURRENT_PAGE":
                return{
                    ...state, 
                    currentPage: action.payload             
                   };

            case "CLEAR_DETAIL":
                return{
                    ...state,
                    dogs: [],
                    copyDogs: []
                }
    
        default: return state;
        }
    }
    
export default rootReducer;