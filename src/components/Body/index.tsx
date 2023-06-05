import { TypeTask } from '../../@types/task'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

import { InfoTasks } from '../InfoTasks'
import { NoTask } from '../NoTask'
import { Task } from '../Task'


interface BodyProps {
    tasks: TypeTask[]
    onAddTask: (content: string) => void
    onCompleteTask: (idPost: string) => void
    onDeleteTask: (idPost: string) => void
}

export function Body ({ tasks, onCompleteTask, onDeleteTask, onAddTask }:BodyProps) {
    
    const [content, setContent] = useState('');
    
    const countCompleteTask = tasks.reduce((acc, curr) => {
        if (curr.done === true) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);

    function handleAddTask () {
        if (content === '') {
            alert('Fill something!')
            return
        }
        onAddTask(content)
        setContent('')
    }

    return (
        <div className="absolute bottom-0 left-0 right-0 top-[200px] bg-gray-500">
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center w-full md:w-2/4 sm:w-3/4 p-2 px-5 sm:px-0">
                    <div className="grid grid-cols-[1fr] xs:grid-cols-[1fr_90px] gap-2 w-full mt-[-2rem]">
                        <input
                            type='text'
                            className="rounded-lg outline-none p-2 bg-gray-400 text-gray-200"
                            placeholder='Adicione uma nova tarefa'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button 
                            onClick={handleAddTask}
                            className="bg-blue-dark hover:bg-blue rounded-lg text-gray-100 flex justify-center items-center p-2 xs:p-0"
                        >
                            <span className='pr-1 font-bold text-sm'>Criar</span>
                            <PlusCircle size={20} weight="regular"/>
                        </button>
                    </div>
                    <div className='pt-16 w-full'>
                        <InfoTasks total={tasks.length} taskComplete={countCompleteTask} />
                        {tasks.length > 0 
                            ? tasks.map((item, key) => { 
                                return <Task 
                                            task={item}
                                            key={item.id}
                                            onCompleteTask={onCompleteTask} 
                                            onDeleteTask={onDeleteTask}
                                        />
                                })
                            : <NoTask />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}