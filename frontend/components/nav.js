import React from "react";
import Link from "next/link";
import Logo from "./logo";
import classnames from "classnames";

const Nav = ({ className, mode }) => {

  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classNames = classnames(
      'header',
      scroll < 10 ? "" : "sticky",
      {
        [`header--${mode}`]:Boolean(mode),

      },
      className
  );

  return (
      <header className={classNames}>
        <div className="container">
          <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a>
                      <Logo/>
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="links">
                  <li>
                      <Link href="/allProjects">
                          <a>projects</a>
                      </Link>
                  </li>
                {/*{categories.map((category) => {*/}
                {/*  return (*/}
                {/*    <li key={category.id}>*/}
                {/*      <Link as={`/category/${category.slug}`} href="/category/[id]">*/}
                {/*        <a>{category.name}</a>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*  );*/}
                {/*})}*/}
              </ul>
          </nav>
        </div>
      </header>
  );
};

export default Nav;
