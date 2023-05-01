import React, { Suspense } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components';
import HomePage from './Components/Pages/homePage';

function withOutLayout(wrappedComponent) {
  // return class extends React.component {
  //   render() {
  console.log("naveennene=>", wrappedComponent);
  return (
    // <Suspense fallback={<div className="appLoading">Loading <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}>
    <Layout>
      {/* {wrappedComponent} */}
      {/* <wrappedComponent {...this.props} ></wrappedComponent> */}
    </Layout>
    // </Suspense>
  )
  // }
  // }
}
function App() {
  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      {/* <Routes>
          {routes?.map((route, index) => {
            console.log("7556789", route)
            return (
              <Route key={index} exact path={route.path} component={ route.element} />
            )
          }
          )}
        </Routes> */}
      {/* </BrowserRouter> */}
      <Layout ></Layout>
    </React.Fragment>
  );
}

export default App;
