import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const UserApply = () => {
    const {user} = useContext(authContext);
    return (
        <div>
            {/* {
                user.displayName
            } */}
        </div>
    );
};

export default UserApply;