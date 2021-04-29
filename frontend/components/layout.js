import Nav from "./nav";
import React from "react";
import Footer from "./footer";


const Layout = ({ children, categories, seo, pageClass }) => (
    <>
        <Nav categories={categories} />
            <main className={pageClass}>

                {children}
            </main>
        <Footer/>
    </>
);

export default Layout;
