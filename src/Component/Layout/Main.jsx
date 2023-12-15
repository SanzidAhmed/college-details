import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;