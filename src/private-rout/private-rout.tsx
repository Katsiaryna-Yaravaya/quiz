import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { RootState } from '../redux/root-reducer'

import { MAIN } from '../constants/routs.constants'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { allServerDataCountries } = useSelector((state: RootState) => state.data)

    console.log(allServerDataCountries)
  return (
    <Route
      {...rest}
      render={props =>
          !allServerDataCountries.length ? <Redirect to={MAIN} /> : <Component {...props} />
      }
    />
  )
}

export default PrivateRoute
