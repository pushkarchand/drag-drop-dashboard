import React,{useReducer, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import {  ThemeProvider } from '@material-ui/core/styles';
import {theme} from './utils/theme';
import { initialState, stateReducer } from './context/reducer';
import { stateContext } from './context'

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);


  return (
    <ThemeProvider theme={theme}>
        <stateContext.Provider value={{state:state,dispatch:dispatch}}>
           <React.Fragment>
              <Router>
                {
                  state.isAuthenticated?(
                    <Switch>
                        <Route exact={true} path="/" component={Dashboard} />
                        <Route  path="*" component={Dashboard} />
                    </Switch>
                  ):( 
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Register} />
                        <Route path="*" component={Login} />
                    </Switch>)
                }
              
              </Router>
            </React.Fragment>
        </stateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
