import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './AddColor.css'

const AddColor = ({colors, createColor}) => {
    document.body.style.backgroundImage = "url('/Rainbow.png')";
    
    const navigate = useNavigate();
    const initialFormState = {
        name: '',
        color: ''
    }
    const initialInvalidState = {
        name: true,
        color: true
    }
    const initialTouchedState = {
        name: false,
        color: false
    }
    
    const [formData, setFormData] = useState(initialFormState);
    const [isInvalid, setIsInvalid] = useState(initialInvalidState);
    const [isTouched, setIsTouched] = useState(initialTouchedState);
  
    const handleChange = e => {
        setIsTouched(prev => ({
            ...prev,
            [e.target.name]: true
        }));

        const {name, value} = e.target;
        if(value === '') {
            setIsInvalid(prev => ({
                ...prev,
                [e.target.name]: true
            }));
        } else {
            setIsInvalid(prev => ({
                ...prev,
                [e.target.name]: false
            }));
        }

        setFormData(data => ({
            ...data,
            [name]: value
        }))
        console.log(colors)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isInvalid.name && !isInvalid.color) {
            createColor({...formData})
            setFormData(initialFormState);
            navigate('/Colors');
        }
    }

    return (
        <div className='section-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-name'>
                    <label htmlFor='name'>Color Name</label>
                    <input
                        type="text"
                        placeholder="Enter a name for this color"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {isInvalid.name && isTouched.name && <span style={{color: 'red'}}>Name cannot be blank!</span>}
                </div>
                
                <div className='form-color'>
                    <label htmlFor='name'>Color Value</label>
                    <input
                        type='color'
                        name="color"
                        id="color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                </div>
                
                
                <button role="button">Add this color</button>
            </form>

        </div>
  )
}

export default AddColor
