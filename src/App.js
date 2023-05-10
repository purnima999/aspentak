import React, { Suspense } from 'react';
import './App.css';
import routes from './routes';
import Layout from './Components';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function withLayout(WrappedComponent) {
  console.log("component==>", WrappedComponent)
  return (
    <Suspense fallback={<div className="appLoading">Loading <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}>
      <Layout>
        {WrappedComponent}
      </Layout>
    </Suspense>
  )
}
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {routes.map((route, idx) =>
            <Route path={route.path} element={withLayout(route.element)} key={idx} />
          )}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
