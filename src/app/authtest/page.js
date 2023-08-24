"use client"
import AuthGuard from '../authguard';

const AuthTest = () => {
    AuthGuard();

    return (
    <div>
    <h1>AuthTest</h1>
    </div>
);
}



export default AuthTest;