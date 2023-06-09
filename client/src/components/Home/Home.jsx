import "./home.css"
import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, filterBySource, filterByTemperaments, getAllDogs, getAllTemperaments, orderByName } from "../../redux/actions/index";

//importo los components necesarios
import DogCard from "../Card/DogCard";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import SearchBar from "../SearchBar/SearchBar"
import Pagination from "../Pagination/Pagination";


function Home () {

    const dispatch = useDispatch(); 
    const history = useHistory();

    const dogs = useSelector(state => state.dogs);  //me trae del reducer el estado "dogs"  
    const temperaments = useSelector(state => state.temperaments);
    
    const [order, setOrder] = useState(""); // estado local que arranca vacío

    const [currentPage, setCurrentPage] = useState(1); //declaro un estado local en el que le paso la pág actual que va a arrancar en 1 y cuál será la pág actual

    const [dogsPerPage, setDogsPerPage] = useState(8); // declaro otro estado local

    const indexOfLastDog = currentPage * dogsPerPage; 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;

    const currentDogs = dogs?.slice(indexOfFirstDog, indexOfLastDog);
    
    const [isLoading, setIsLoading] = useState(true);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
        setIsLoading(false);
        return () => {
            dispatch(clearDetail())
        };
    }, [dispatch])


    function handleOrderingByName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1)
        setOrder(`Organized ${e.target.value}`) //al estado local que arranca vacío lo seteo 
    }

    function handleFilterTemperaments(e) {
        e.preventDefault();
        dispatch(filterByTemperaments(e.target.value));
        setCurrentPage(1)
        setOrder(`Organized ${e.target.value}`)
        console.log(e)
    }
    

    function handleFilterBySource(e) {
        e.preventDefault();
        dispatch(filterBySource(e.target.value));
        setCurrentPage(1)
        setOrder(`Organized ${e.target.value}`)
    }

    function handleClearFilter() {
        history.go(0)
    }

// renderizo

    if (dogs?.length < 0) {
        return <Loading/>
    } 
    else return (
        <div className="container-home">

            <div className="nav-container">
                <NavBar/>
            

            <div className="all-containers">
                <select className="container-alphabetical" onChange={handleOrderingByName}>
                    <option value= "default" hidden>Order By Name</option>
                    <option value= "asc">A - Z</option>
                    <option value= "desc">Z - A</option>
                </select>
                                      
                <select className="container-select" onChange={handleFilterBySource}>
                    <option className="container-select__option" value= "default" hidden>Order By Source</option>
                    <option className="container-select__option" value= "createdDB">Dogs Created</option>
                    <option className="container-select__option" value= "byApi">Dogs Api</option>
                </select>

                <select className="container-temps" onChange={(e) => handleFilterTemperaments(e)}>
                    <option value= "all" hidden>All Temperaments</option>
                        {temperaments?.map((t) => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                </select>
                               
             <button className="clear-button" onClick={handleClearFilter}>Clear Filters</button>
            
            </div>
            </div>

            <div className="container-searchBar">
                <SearchBar/>
            </div>


    {/* si Loading es true, se renderiza Loading, de lo contrario se renderiza la lista de componentes Card*/}
            {isLoading ? <Loading/> : <div>
                <div className="container-cards">
                    {currentDogs?.map(e => {
                        return (
                            <Link to={`/detail/${e.id}`} key={e.id}>
                                <DogCard id={e.id}
                                    name={e.name}
                                    image={e.image}
                                    temperaments={e.temperaments}
                                    weight={e.weight}
                                    key={e.id} 
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
            }

            
            <div className="home-pagination">
                <Pagination 
                    dogsPerPage={dogsPerPage}
                    dogs={dogs?.length}
                    pagination={pagination}
                />
            </div>

        </div>
    )
};

export default Home;