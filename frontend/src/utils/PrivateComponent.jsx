import { Navigate } from 'react-router-dom';

const PrivateComponent = ({Component}) => {
    const auth = true; //your logic

    return auth ? <Component /> : <Navigate to="/login" />;
};
export default PrivateComponent;