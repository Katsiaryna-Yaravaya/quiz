import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "../redux/root-reducer";

import { MAIN } from "../constants/routs.constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { credentialUser } = useSelector((state: RootState) => state.data);
  const {email, pass} = credentialUser
  
  return (
    <Route
      {...rest}
      render={(props) =>
        !email && !pass ? <Redirect to={MAIN} /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
