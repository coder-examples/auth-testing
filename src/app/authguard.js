import React, { useEffect } from 'react';

const AuthGuard = () => {
    useEffect(() => {
        if(window.localStorage.getItem('token')) {
            fetch('http://localhost:3001/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({token: window.localStorage.getItem('token'), id: window.localStorage.getItem('id')}),
            }).then((response) => response.json())
                .then(r => {
                    if(!r.verified) {
                        window.location.href = '/login';
                    }
                })
        }
    }, []);
}

export default AuthGuard;