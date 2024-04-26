import styles from "./TodoList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todosSlice";
import { InputNewTask } from "../InputNewTask/InputNewTask";
import { RootState } from "../../store";

interface ITodoList {
    filter?: "removed";
}

const TodoList = ({ filter }: ITodoList) => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) =>
        state.todos.todos.filter((el) => (filter ? el.deleted : !el.deleted)),
    );

    return (
        <>
            {filter ? (
                <p className={styles.listAllTodos__title}>Removed todos</p>
            ) : (
                <>
                    <p className={styles.listAllTodos__title}>My todos</p>
                    <InputNewTask />
                </>
            )}
            {todos.length !== 0 ? (
                <div className={styles.listAllTodos}>
                    {todos.map((el) => {
                        return (
                            <div
                                key={el.id}
                                className={styles.todo_text}
                            >
                                {!filter ? (
                                    <div
                                        onClick={() => dispatch(deleteTodo({ id: el.id }))}
                                        className={styles.todoDelete}
                                    >
                                        &times;
                                    </div>
                                ) : (
                                    <div className={styles.deletedTodo}></div>
                                )}
                                {el?.text}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className={styles.listAllTodos__messageEmptyList}>An empty list</div>
            )}
        </>
    );
};

export default TodoList;
