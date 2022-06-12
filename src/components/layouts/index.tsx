import React from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header/>
      <main id="main" className="main" role="main" data-page-type="overview">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
