import React, { Component } from 'react';
import Header from './Pages/header';
import Footer from './Pages/footer';
import HomePage from './Pages/homePage';
import AboutPage from './Pages/aboutPage';
import ServicesPage from './Pages/servicesPage';
import ContactPage from './Pages/contactPage';
import CareerPage from './Pages/careerPage';

const LayoutContent = (props) => {
    return (
        <React.Fragment>
            <div id="wrapper">
                <Header />
                <div className='content-page'>
                    <div className='content'>
                        {props.children}
                        {/* <HomePage/> */}
                        {/* <AboutPage/> */}
                        {/* <ServicesPage /> */}
                        {/* <ContactPage/> */}
                        {/* <CareerPage/> */}
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

class Layout extends Component {
    constructor(props) {
        super(props);
        console.log("layout==>", this.props.children);
    }


    getRenderLayout = (value) => {
        return <LayoutContent {...this.props} />
    }
    render() {
        return (
            <React.Fragment>
                <LayoutContent  {...this.props}/>
                {/* {this.getRenderLayout(this.props.Layout)} */}
            </React.Fragment>
        )
    }
}

export default Layout;