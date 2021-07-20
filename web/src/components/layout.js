import React from "react";
import Header from "./header";
import Header2 from "./header2";
import Footer from "./footer";
import Typography from "./../styles/Typography";

import "../styles/layout.css";
import * as styles from "./layout.module.css";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header2 />
    <div className={styles.content}>{children}</div>
    <Footer />
  </>
);

export default Layout;
