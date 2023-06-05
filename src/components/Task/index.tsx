import { Trash } from 'phosphor-react'
import { TypeTask } from '../../@types/task'

interface taskProps {
    task: TypeTask
    onCompleteTask: (idPost: string) => void
    onDeleteTask: (idPost: string) => void
}

export function Task ({ task, onCompleteTask, onDeleteTask }: taskProps) {

    function handleCompleteTask () {
        onCompleteTask(task.id)
    }

    function handleDeleteTask () {
        onDeleteTask(task.id)
    }

    return (
        <div className="bg-gray-400 rounded-lg p-4 mb-4 flex justify-center items-center">
            <div>
                <input
                    type='checkbox'
                    readOnly
                    checked={task.done}
                    onClick={handleCompleteTask}
                />
            </div>
            
            <div className='flex-1 px-4'>
                <span
                className={task.done === true 
                            ? 'text-sm text-gray-300 text-justify line-through' 
                            : 'text-sm text-gray-100 text-justify' }>
                                                                        {task.content}</span>
            </div>
            
            <div className='text-gray-300 hover:text-gray-100'>
                <button
                    onClick={handleDeleteTask}
                >
                    <Trash size={14} weight='fill' />
                </button>
            </div>
        </div>
    )
}

// line-through text-gray-300 === true