import React from "react";

const HomePage = React.lazy(() => import('./Components/Pages/homePage.jsx'));
const AboutPage = React.lazy(() => import('./Components/Pages/aboutPage.jsx'));

const routes = [

    { path: '/', element: <HomePage /> },
    { path: 'aboutUs', element: <AboutPage /> }
]


export default routes;