import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export { Layout };
