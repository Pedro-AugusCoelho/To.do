import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import { Body } from "../components/Body";
import { Header } from "../components/Header";

import { TypeTask } from "../@types/task";

export function Main () {
    const [task, setTask] = useState<TypeTask[]>([
        {
            id: '1',
            done: true,
            content: 'Terminar projeto'
        },
        {
            id: '2',
            done: false,
            content: 'Testar To-do'
        }
    ]);

    function handleAddTask (content: string) {
        const createdTask:TypeTask = {
            id: uuidv4(),
            content,
            done: false
        }

        setTask([...task, createdTask])
    }

    function handleCompleteTask (idTask: string) {
        const copyTask = [...task]
        for (const i in copyTask) {
            if (copyTask[i].id === idTask) {
                copyTask[i].done = !copyTask[i].done
            }
        }
        setTask(copyTask)
    }

    function handleDeleteTask (idTask: string) {
        const copyTask = task.filter((el) => {
            return el.id !== idTask;
          });
          setTask(copyTask);
    }

    return(
        <div>
            <Header />
            <Body
                tasks={task}
                onAddTask={handleAddTask}
                onCompleteTask={handleCompleteTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    )
}