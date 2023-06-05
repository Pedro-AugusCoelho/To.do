interface infoTasksProps {
    total: number
    taskComplete: number
}

export function InfoTasks ({taskComplete, total}: infoTasksProps) {
    const messageTaskExist = total > 0 ? `${taskComplete} de ${total}` : total 


    return (
        <div className='flex flex-col justify-between items-start pb-6 xs:items-center xs:flex-row'>
            <div className="flex justify-between w-full pb-3 xs:block xs:pb-0">
                <span className="text-blue font-bold text-sm pr-2">Tarefa criadas</span> 
                <span className="text-gray-200 bg-gray-400 rounded-full px-2 py-1 text-xs">{total}</span>
            </div>
            
            <div className="flex justify-between w-full xs:block xs:text-right">
                <span className="text-purple font-bold text-sm pr-2">Concluídas</span> 
                <span className="text-gray-200 bg-gray-400 rounded-full px-2 py-1 text-xs">{messageTaskExist}</span>
            </div>
        </div>
    )
}