import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"
import { getAllDogs, getAllTemperaments, createDog} from "../../redux/actions/index";

const Form = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const dogs = useSelector(state => state.copyDogs);
    const temperaments = useSelector(state => state.copyTemperaments);
    const [error, setError] = useState({});
    const dogsCheck = dogs.map(e => e.name);
    
    const validate = (input) => {
        let errors = {};

        if(!input.name) {
            errors.name = "Name must be completed"
        }

        if(!input.image) {
            errors.image = "Image must be completed"
        }

        if(!input.height) {
            errors.height = "Height must be completed"
        }
        
        if(!input.weight) {
            errors.weight = "Weight must be completed"
        }

        if(!input.life_span) {
            errors.life_span = "Life span must be completed"
        }
            
        if(!input.temperament.length) { 
            errors.temperament = "At least one temperament must be selected"      
        }

        return errors;
    };


    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
    }, [dispatch])

    
    const [input, setInput] = useState({
        name: "",
        image: "",
        height: "",
        weight: "",
        life_span: "",
        temperament: []
    });

    const handleChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        setError(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSelect = (e) => {
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    };


    const handleDelete = (temperament) => {
        setInput({
            ...input,
            temperament: input.temperament.filter(t => t !== temperament)
        })
    
        setError(validate({
            ...input,
            temperament: input.temperament.filter(t => t !== temperament)
        }));       
    };


    const handleCheckErrors = (e) => {
        e.preventDefault();
        setError(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));
    };
            
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate(input);
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }


        dispatch(createDog(input));

        alert("Your Dog has been created succesfully!")
        setInput({
            name: "",
            image: "",
            height: "",
            weight: "",
            life_span: "",
            temperament: []
        })
        history.push("/home")
    };

    return(

        <div>
            <h1 className="tittle">Create your Doggy!</h1>
            <div className="container-form">
                <form onSubmit={handleSubmit}>

                    <div className="form-input">
                        <label className="form-label">Name: </label>
                        <input value={input.name}
                               type="text"
                               name="name"
                               autoComplete="off"
                               placeholder="Enter a name"
                               onChange={handleChange}
                        />
                        {
                            error.name && (
                                <p>{error.name}</p>
                            )
                        }
                    </div>
                               

                    <div className="form-input">
                        <label className="form-label">Height: </label>
                        <input value={input.height}
                               type="number"
                               name="height"
                               autoComplete="off"
                               placeholder="0"
                               onChange={handleChange}
                        />
                        {
                            error.height && (
                                <p>{error.height}</p>
                            )
                        }
                    </div>


                    <div className="form-input">
                        <label className="form-label">Weight: </label>
                        <input value={input.weight}
                               type="number"
                               name="weight"
                               autoComplete="off"
                               placeholder="0"
                               onChange={handleChange}
                        />
                        {
                            error.weight && (
                                <p>{error.weight}</p>
                            )
                        }
                    </div>


                    <div className="form-input">
                        <label className="form-label">Life_span: </label>
                        <input value={input.life_span}
                               type="number"
                               name="life_span"
                               autoComplete="off"
                               placeholder="0"
                               onChange={handleChange}
                        />
                        
                        {
                            error.life_span && (
                                <p>{error.life_span}</p>
                            )
                        }
                    </div>


                    <div className="form-input">
                      <label className="form-label">Temperament: </label>
                      <select name="temperament" onChange={handleSelect}>
                          <option hidden value="default">Select a Temperament</option>
                          {temperaments.map((t) => (
                            <option value={t.name}>{t.name}</option>
                          ))}
                      </select>

                      <div className='temperaments-select'>
                         {input.temperament.map((temperament, index) => (
                             <div className='form-temperaments_delete' key={index}>{temperament}
                             <button onClick={() => handleDelete(temperament)}>x</button>
                             </div>
                         ))}
                      </div>               
                    </div>

                    <div>
                    {error.name ||
                     error.image ||
                     error.height||
                     error.weight||
                     error.life_span||
                     error.temperament ?
                    <button type="submit" className="form-button">Create</button>
                    : <button className="btn" onClick={e => handleCheckErrors(e)}>Create</button>
                    }
                    </div>
                               
                </form>

                <Link to="/home"><button>GO HOME</button></Link>

            </div>
        </div>
    )
}

export default Form;