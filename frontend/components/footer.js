import React from "react";
import Link from "next/link";
import Logo from "./logo";
import classnames from "classnames";

const Footer = ({  }) => {
    const date = new Date();
    return (
        <footer className="footer">
            <div className="container">
                <nav>
                    <ul>
                        <li className="logoLink">
                            <Link href="/">
                                <a>
                                    <Logo/>
                                </a>
                            </Link>
                        </li>
                        <li>
                                    UKRAINE
                        </li>
                        <li>
                            © IDEST brand bureau, {date.getFullYear()}
                        </li>
                    </ul>
                    <ul className="links">
                        <li>
                            <Link href="mailto:">
                                <a>hello@idestagency.com</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://">
                                <a>@idest.brand.bureau</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://">
                                <a>@idest.brand.bureau</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
