import Nav from "./nav";
import React from "react";
import Footer from "./footer";


const Layout = ({ children, categories, pageClass }) => (
    <>
        <Nav categories={categories} className={pageClass==="mainPage"?"mainPageHeader":null}/>
            <main className={pageClass}>
                {children}
            </main>
        <Footer/>
    </>
);

export default Layout;
