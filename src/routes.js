import React from "react";

const HomePage = React.lazy(() => import('./Components/Pages/homePage.jsx'));


const routes = [

    { path: '/', element: <HomePage /> },

]


export default routes;