import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Logo from "./logo";
import classnames from "classnames";
import {Select} from "antd";
import en from "../public/locales/en";
import ru from "../public/locales/ru";
import ua from "../public/locales/ua";
import useWindowSize from "../utils/useWindowSize";
const { Option } = Select;

const Nav = ({ className, mode }) => {
    const [scroll, setScroll] = useState(0);
    const [isOpen, setOpen] = useState(false)
    const { width } = useWindowSize();

    const handleOpenMenu = () => {
        setOpen(!isOpen)
        console.log(isOpen);
    }
    const openClass = isOpen ? "open" : "";

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
        const router = useRouter();
        const handleChange = (value) => {
            router.push(router.asPath, router.asPath, {
                locale: value
            })
        };

        const {locale} = router;
        let t ;
        switch (locale) {
            case "ru-RU":
                t = ru;
                break;
            case "uk-UA":
                t = ua;
                break;
            default:
                t =  en;
        };

  return (
      <header className={classNames}>
        <div className="container">
          <nav className={"navigation " + openClass}>
              <ul className="logo">
                <li>
                  <Link href="/" >
                    <a><Logo/></a>
                  </Link>
                </li>
              </ul>
              <div
                  className={"mobileBtn " + openClass}
                  onClick={handleOpenMenu}
              >
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <ul className={"links " + openClass}>
              <li className={router.pathname == "/about" ? "active" : ""}>
                      <Link href="/about">
                          <a>{t.aboutUs}</a>
                      </Link>
                  </li>
                  <li className={router.pathname == "/projects" ? "active" : ""}>
                      <Link href="/projects" >
                          <a>{t.projects}</a>
                      </Link>
                  </li>
                  <li className={router.pathname == "/approach" ? "active" : ""}>
                      <Link href="/approach">
                          <a>{t.approach}</a>
                      </Link>
                  </li>
                  <li className={router.pathname == "/vacancies" ? "active" : ""}>
                      <Link href="/vacancies">
                          <a>{t.vacancies}</a>
                      </Link>
                  </li>
                  <li className={router.pathname == "/contacts" ? "active" : ""}>
                      <Link href="/contacts">
                          <a>{t.contacts}</a>
                      </Link>
                  </li>
                  <li>
                      <Select
                          className="languagePicker"
                          value={router.locale}
                          onChange={handleChange}
                          bordered={false}
                      >
                          <Option value="en">{t.EN}</Option>
                          <Option value="uk-UA">{t.UA}</Option>
                          <Option value="ru-RU">{t.RU}</Option>
                      </Select>
                  </li>
              </ul>
          </nav>
        </div>
      </header>
  );
};

export default Nav;
