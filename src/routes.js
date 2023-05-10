import React from "react";

const HomePage = React.lazy(() => import('./Components/Pages/homePage.jsx'));
const AboutPage = React.lazy(() => import('./Components/Pages/aboutPage.jsx'));
const ServicesPage = React.lazy(() => import('./Components/Pages/servicesPage.jsx'));
const ContactPage = React.lazy(() => import('./Components/Pages/contactPage.jsx'));
const CareerPage = React.lazy(() => import('./Components/Pages/careerPage.jsx'));

const routes = [

    { path: '/', element: <HomePage /> },
    { path: 'aboutUs', element: <AboutPage /> },
    { path: 'services', element: <ServicesPage /> },
    { path: 'contactUs', element: <ContactPage /> },
    { path: 'career', element: <CareerPage /> },

]


export default routes;