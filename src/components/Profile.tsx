import * as React from 'react'
import { useHistory } from 'react-router-dom';
import { authenticate } from './common/utilities';

function Profile(){
    
    const history = useHistory();

    if(!authenticate()){
        history.push('/login');
    }
    
    return <div>
        <h2>Profile</h2>
    </div>
}

export default Profile;