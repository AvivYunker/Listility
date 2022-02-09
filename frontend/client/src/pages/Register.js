import React from 'react';
import { useState, useEffect} from 'react';
import { Logo, FormRow, Alert } from '../components'; 
import Wrapper from '../assets/wrappers/RegisterPage';
<<<<<<< HEAD
import { useAppContext } from '../context/appContext'
=======
import { useAppContext } from '../context/appContext';
>>>>>>> 23fa156c031728480274de3ad3ad4641a561e2ed

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    // global state and useNavigate

<<<<<<< HEAD
    const {isLoading, showAlert, displayAlert } = useAppContext();
=======
const {isLoading, showAlert} = useAppContext()
>>>>>>> 23fa156c031728480274de3ad3ad4641a561e2ed

    const toggleMember = () => {
        setValues({...values, isMember:!values.isMember})
    }

    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember} = values;
        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return 
        }
        console.log(values);
    }
<<<<<<< HEAD
    return(
        <Wrapper className='full-page'>
            <form action="form" onSubmit={onSubmit}>
                <Logo/>
                <h3>{values.isMember ? "Login" : "Register"}</h3>
                {showAlert && <Alert/>}
                {/* name input */}
                {!values.isMember && (
                    <FormRow
=======
    return <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember ? "Login":"Register"}</h3>
            {showAlert && <Alert/>}
            {/* name input */}
            {!values.isMember && (
                <FormRow
>>>>>>> 23fa156c031728480274de3ad3ad4641a561e2ed
                    type="text"
                    name="name"
                    value={values.name}
                    handleChange={handleChange}
                    />
                )}
                {/* email input */}
                <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* password input */}
                <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            <p>
                {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                <button type="button" onClick={toggleMember} className="member-btn">
                    {values.isMember ? 'Register' : 'Login'}
                </button>
            </p>
            </form>
        </Wrapper>
    );
}

export default Register;