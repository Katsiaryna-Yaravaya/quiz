import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "../redux/root-reducer";

import { MAIN_GAME } from "../constants/routs.constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { credentialUser } = useSelector((state: RootState) => state.data);

  return (
    <Route
      {...rest}
      render={(props) =>
        (!credentialUser.length ? <Redirect to={MAIN_GAME} /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;
