import React, { useState } from "react";
import styles from "./InputNewTask.module.scss";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { addTodo } from "../../store/todosSlice";

type FormValues = {
    name: string;
};

const InputNewTask = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormValues>({
        mode: "onBlur",
    });

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const changeTasksName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const createTask: SubmitHandler<FormValues> = (e) => {
        reset();
        dispatch(addTodo(name));
    };

    return (
        <form onSubmit={handleSubmit(createTask)}>
            <div className={styles.inputNewTask}>
                <input
                    {...register("name", {
                        required: "Please fill in the required field",
                    })}
                    onChange={changeTasksName}
                    placeholder="What needs to be done?"
                    className={styles.inputNewTask__input}
                />
                <input
                    type="submit"
                    className={styles.inputNewTask__btn}
                    value={"Add"}
                ></input>
            </div>
            <div className={styles.error}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
        </form>
    );
};

export { InputNewTask };
