import Nav from "./nav";

const Layout = ({ children, categories, seo, pageClass }) => (
  <main className={pageClass}>
    <Nav categories={categories} />
    {children}
  </main>
);

export default Layout;
