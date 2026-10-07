import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const router = useNavigate();

        const isAuthenticated = () => {
            if(localStorage.getItem("token")) { // for demo we are getting only the token to see if the user is logged in, otherwise we can also validate the token afterwards
                return true;
            }
            return false;
        }

        useEffect(() => {
            if(!isAuthenticated()){
             router("/auth")
            }
        }, [])

        return <WrappedComponent {...props} />
    } 

    return AuthComponent;
}

export default withAuth; // the component which is wrapped with this component(withAuth) gets checked for login to enter the component otherwise user gets pushed to any declared route  