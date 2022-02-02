import React from 'react'

const Logout = (props) => {
    const cle = sessionStorage.getItem('token');
    if(cle){
        sessionStorage.removeItem('token');
        window.location.href= '/';
    }
    return (
        <>
        </>
    )
}

export default Logout
