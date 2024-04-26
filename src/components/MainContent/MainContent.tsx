import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./MainContent.module.scss";
import { Route, Routes } from "react-router-dom";
import TodoList from "../TodoList/TodoList";

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Header />
            <div className={styles.mainScreen}>
                <div className={styles.mainScreen_container}>
                    <div className={styles.mainScreen_container_todos}>
                        <Routes>
                            <Route
                                path="/"
                                element={<TodoList />}
                            ></Route>
                            <Route
                                path="/deleted"
                                element={<TodoList filter="removed" />}
                            ></Route>
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainContent;
