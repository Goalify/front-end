import * as React from 'react'
import { useHistory } from 'react-router-dom';
import { authenticate } from './common/utilities';

function AboutUs(){

    const history = useHistory();

    if(!authenticate()){
        history.push('/login');
    }

    return <div className="aboutus">
        <h2>About Us Page</h2>
    </div>
}

export default AboutUs;