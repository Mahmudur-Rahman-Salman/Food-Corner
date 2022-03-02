
import React from 'react';

import useAuth from '../hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();




    return (
        <div className='d-flex justify-content-center mt-5 pt-5'>
            <div className='text-center shadow p-5 bg-dark'>
                <h4 className='text-light border-bottom'>Login</h4>
                <br /> <br />
                <button className='bg-danger text-light rounded-pill p-2 border-0' onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
        </div>
    );
};

export default Login;