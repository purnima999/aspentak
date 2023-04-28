import React, { Component } from 'react';
import Header from './Pages/header';
import Footer from './Pages/footer';
import HomePage from './Pages/homePage';

const LayoutContent = (props) => {
    return (
        <React.Fragment>
            <div id="wrapper">
                <Header />
                <div className='content-page'>
                    <div className='content'>
                        {/* {props.children} */}
                        <HomePage/>
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
        console.log("layout==>", "naavvavvaa", this.props.Layout);
    }


    getRenderLayout = (value) => {
        return <LayoutContent {...this.props} />
    }
    render() {
        return (
            <React.Fragment>
                <LayoutContent />
                {/* <h1>jjdjjdjdjj</h1>
                 */}
                {/* {this.getRenderLayout(this.props.Layout)} */}
            </React.Fragment>
        )
    }
}

export default Layout;