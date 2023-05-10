import "./form.css";
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import {getAllDogs, getAllTemperaments, createDog} from "../../redux/actions/index";

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
        
        if(!input.temperaments.length) { 
            errors.temperaments = "At least one temperament must be selected"      
        }
        
        return errors;
    };
    
    const Form = () => {
        
        const dispatch = useDispatch();
        // const history = useHistory();
        const temperaments = useSelector(state => state.temperaments);
        const [error, setError] = useState({});
        

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
    }, [dispatch])

    
    const [input, setInput] = useState({
        name: "",
        image: "",
        height: 0,
        weight: 0,
        life_span: 0,
        temperaments: [],
    });

    const handleChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelect = (e) => {
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
    };


    const handleDelete = (temperaments) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(t => t !== temperaments)
        })
    
        setError(validate({
            ...input,
            temperaments: input.temperaments.filter(t => t !== temperaments)
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
        alert("Your doggy has been created!")

        setInput({
            name: "",
            image: "",
            height: 0,
            weight: 0,
            life_span: 0,
            temperaments: [],
        })

    };

    return(
        
        <div className="form-container">

            <div className="backToHome">
             <Link to="/home">
                <div className="button">GO HOME</div>
             </Link>
            </div>


        <div className="form">


            <div>
            <h1 className="title">CREATE YOUR DOGGY!</h1>
            </div>


            <div className="container-form">
                <form onSubmit={e => handleSubmit(e)}>

            
                <div>
                    <div className="form-input">
                        <label className="form-name__label">Name: </label>
                        <input className="input-name" value={input.name}
                               type="text"
                               name="name"
                               autoComplete="off"
                               placeholder="Enter a name"
                               onChange={e => handleChange(e)}
                        />

                        {
                            error.name && (
                                <p>{error.name}</p>
                            )
                        }
                    </div>
                </div>
            

                <div>
                    <div className="form-input">
                        <label className='form-image__label'>Image: </label>
                            <input className="input-image" value={input.image}
                                   type='text'
                                   name='image'
                                   autoComplete='off'
                                   placeholder='Image URL'
                                   onChange={e => handleChange(e)}
                            />

                            {
                                    error.image && (
                                        <p>{error.image}</p>
                                    )
                                }
                        </div>
                </div>
                                   
                               
            <div>
                    <div className="range-input">
                        <label className="form-height__label">Height: </label>
                        <input value={input.height}
                               type="range"
                               min='0'
                               max='100'
                               name="height"
                               autoComplete="off"
                               placeholder="0"
                               onChange={e => handleChange(e)} />
                        {<p>{input.height}</p>}
                        {
                            error.height && (
                                <p>{error.height}</p>
                            )
                        }
                    </div>


                    <div className="range-input">
                        <label className="form-weight__label">Weight: </label>
                        <input value={input.weight}
                               type="range"
                               min='0'
                               max='100'
                               name="weight"
                               autoComplete="off"
                               placeholder="0"
                               onChange={e => handleChange(e)}
                        />
                        {<p>{input.weight}</p>}
                        {
                            error.weight && (
                                <p>{error.weight}</p>
                            )
                        }
                    </div>


                    <div className="range-input">
                        <label className="lifespan__label">Life span: </label>
                        <input value={input.life_span}
                               type="range"
                               min='0'
                               max='100'
                               name="life_span"
                               autoComplete="off"
                               placeholder="0"
                               onChange={e => handleChange(e)}
                        />
                        {<p>{input.life_span}</p>}                        
                        {
                            error.life_span && (
                                <p>{error.life_span}</p>
                            )
                        }
                    </div>
            </div>


            <div className="temperaments-container">
                    <div>
                      <label className="form-temperaments__label">Temperament: </label>
                    
                    <div className="temperaments-options">
                      <select name="temperament" onChange={e => handleSelect(e)}>
                        
                          <option hidden value="default">Select a Temperament</option>
                          {temperaments?.map((t) => (
                            <option key={t.name} value={t.name}>{t.name}</option>
                          ))}
                      </select>
                    </div>

                      <div className='temperaments-input'>
                         {input.temperaments.map((temperaments, index) => (
                             <div className='form-temperaments__div' key={index}>{temperaments}
                             <button onClick={() => handleDelete(temperaments)}>x</button>
                             </div>
                         ))}
                      </div>               
                    </div>
            </div>


                    <div>
                    <button className="button-create" type="submit">CREATE</button>
                    </div>
                    

                </form>

            </div>

          </div>

        </div>
    )
}

export default Form;