import React from "react";
import styles from "./Header.module.scss";
import CustomLink from "../CustomLink/CustomLink";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
    const deletedTodosAmount = useSelector((state: RootState) => state.todos.todos.filter((el) => el.deleted).length);
    const activeTodosAmount = useSelector((state: RootState) => state.todos.todos.filter((el) => !el.deleted).length);

    return (
        <div className={styles.header}>
            <img
                src="images/logo.svg"
                alt="Oops"
                className={styles.header__logo}
            />
            <ul className={styles.header_toggleTodos}>
                <li>
                    <CustomLink
                        to={"/"}
                        text={`All (${activeTodosAmount})`}
                    ></CustomLink>
                </li>
                |
                <li>
                    <CustomLink
                        to={"/deleted"}
                        text={`Deleted (${deletedTodosAmount})`}
                    ></CustomLink>
                </li>
            </ul>
        </div>
    );
};

export { Header };
