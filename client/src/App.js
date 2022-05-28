import React, { createContext, useReducer } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/UseReducer';
// import ErrorPage from './components/ErrorPage';

//use context Api
export const UserContext = createContext();

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
}
export default App;
