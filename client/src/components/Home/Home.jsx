import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDog, filterByTemperaments, getAllDogs, getAllTemperaments, orderByName } from "../../redux/actions/index";

//importo los components necesarios
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import SearchBar from "../SearchBar/SearchBar"
import Pagination from "../Pagination/Pagination";


function Home () {

    const dispatch = useDispatch();
    const history = useHistory();

    const dogs = useSelector(state => state.dogs);  //me trae del reducer el estado "pokemons"  
    const temperaments = useSelector(state => state.temperaments);
    
    const [order, setOrder] = useState(""); // estado local que arranca vacío

    const [currentPage, setCurrentPage] = useState(1); //declaro un estado local en el que le paso la pág actual que va a arrancar en 1 y cuál será la pág actual

    const [dogsPerPage, setDogsPerPage] = useState(8); // declaro otro estado local

    const indexOfLastDog = currentPage * dogsPerPage; 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;

    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
    
    const [isLoading, setIsLoading] = useState(true);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments())
        setIsLoading(false);
    }, dispatch)


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
    }

    function handleFilterBySource(e) {
        e.preventDefault();
        dispatch(createDog(e.target.value));
        setCurrentPage(1)
        setOrder(`Organized ${e.target.value}`)
    }

    function handleClearFilter() {
        history.go(0)
    }

// renderizo
    return (
        <div>

            <div>
                <NavBar/>
            </div>

            <div>
                <select onChange={handleOrderingByName}>
                    <option value= "default" hidden>Order By Name</option>
                    <option value= "asc">A - Z</option>
                    <option value= "desc">Z - A</option>
                </select>
                                      
                <select defaultValue="default" className="container-select" onChange={handleFilterBySource}>
                    <option className="container-select__option" value= "default" hidden>Order By Source</option>
                    <option className="container-select__option" value= "createdDB">Dogs Created</option>
                    <option className="container-select__option" value= "byApi">Dogs Api</option>
                </select>

                <select onChange={handleFilterTemperaments}>
                    <option value= "all" hidden>All Temperaments</option>
                        {temperaments?.map((t) => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                </select>
                               
             <button className="container-btn" onClick={handleClearFilter}>Clear Filters</button>
            
            </div>

            <div>
                <SearchBar/>
            </div>


            <div className="home-pagination">
                <Pagination 
                    dogsPerPage={dogsPerPage}
                    dogs={dogs.length}
                    pagination={pagination}
                />
            </div>

    {/* si Loading es true, se renderiza Loading, de lo contrario se renderiza la lista de componentes Card*/}
            {isLoading ? <Loading/> : <div className="container">
                <div className="container-cards">
                    {currentDogs?.map(e => {
                        return (
                            <Link to={`/detail/${e.id}`}>
                                <Card id={e.id}
                                      name={e.name}
                                      image={e.image}
                                      life_span={e.life_span}
                                      height={e.height}
                                      weight={e.weight}
                                      key={e.id} 
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
            }

        </div>
    )
};

export default Home;