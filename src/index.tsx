import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
    <Router>
        <ReduxProvider store={store}>
            <App/>
        </ReduxProvider>
    </Router>,
    document.getElementById("root")
)