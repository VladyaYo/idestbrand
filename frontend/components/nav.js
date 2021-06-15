import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Logo from "./logo";
import classnames from "classnames";
import {Select} from "antd";
const { Option } = Select;

const Nav = ({ className, mode }) => {
    const [scroll, setScroll] = React.useState(0);
    const [isOpen, setOpen] = React.useState(false);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    const { asPath } = useRouter()

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
        const toggleOpen = isOpen ? true : "open";

        const handleToggle = () => {
            setOpen(!isOpen);
        };
        const router = useRouter();
        const handleChange = (value) => {
            router.push(router.asPath, router.asPath, {
                locale: value
            })
        };

  return (
      <header className={classNames}>
        <div className="container">
          <nav>
              <ul>
                <li>
                  <Link href="/homepage" >
                    <a>
                      <Logo/>
                    </a>
                  </Link>
                </li>
              </ul>
              <div
                  className={isOpen ? true : "open"}
                  onClick={handleToggle}
              >
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <ul className="links">
                  <li>
                      <Link href="/projects" >
                          <a>projects</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/approach">
                          <a>approach</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/vacancies">
                          <a>vacancies</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/contacts">
                          <a>contacts</a>
                      </Link>
                  </li>
                  <li>
                      <Select
                          className="languagePicker"
                          value={router.locale}
                          onChange={handleChange}
                          bordered={false}
                      >
                          <Option value="en">EN</Option>
                          <Option value="ru-RU">RU</Option>
                          <Option value="uk-UA">UA</Option>
                      </Select>
                  </li>
                  {/*<li>*/}
                  {/*    <ul>*/}
                  {/*        <li>*/}
                  {/*            <Link href="/approach">*/}
                  {/*              <a>en</a>*/}
                  {/*          </Link>*/}
                  {/*        </li>*/}
                  {/*        <li>*/}
                  {/*            <Link href="/approach">*/}
                  {/*            <a>contacts</a>*/}
                  {/*        </Link></li>*/}
                  {/*    </ul>*/}
                  {/*    */}
                  {/*</li>*/}
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
