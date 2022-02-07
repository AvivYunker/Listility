import React from 'react';
import { useState, useEffect} from 'react';
import Logo from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    // global state and useNavigator

    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return <Wrapper className="full-page">
        <form className="form" action="">
            <Logo/>
            <h3>Login</h3>
            {/* name input */}
            <div className="form-row">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={values.name} name="name" onChange={handleChange} className="form-label"/>
            </div>
            <button type="submit" className="btn btn-block">
                submit
            </button>
        </form>
    </Wrapper>
  return(
    <h1>
        Register
    </h1>
  );
};

export default Register;
