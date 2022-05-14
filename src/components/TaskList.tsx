import { useState } from 'react';

import '../styles/tasklist.scss';

import { FiTrash, FiCheckSquare } from 'react-icons/fi';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [id , setId ] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if(newTaskTitle){
      let tempTask:Task[] = [];
      tempTask = [...tasks];
      tempTask.push({
        id:id,
        title:newTaskTitle,
        isComplete:false,
      });
      setTasks(tempTask);
      setId(id + 1);
      setNewTaskTitle('');
    }else{
      alert('Preencha a tarefa a ser realizada');
    }
  };

  function handleToggleTaskCompletion(id: number) {
    const tempTask:Task[] = [...tasks];
      for(let i in tempTask) {
          if(tempTask[i].id === id){
              if(tempTask[i].isComplete === true){
                tempTask[i].isComplete = false;
                break;
              };
              tempTask[i].isComplete = true;
              break;
          };
      }
      setTasks(tempTask);
  }

  function handleRemoveTask(id: number) {
    const tempRask = tasks.filter((el) => {
      return el.id !== id;
    });
    setTasks(tempRask);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}; 
