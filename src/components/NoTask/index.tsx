import { Clipboard } from 'phosphor-react'

export function NoTask() {
    return (
        <div className="border-t-[2px] border-gray-400 flex justify-center items-center">
            <div className='pt-16 flex flex-col justify-center items-center text-gray-300 text-center'>
                <Clipboard size={64} weight='regular' />
                <div className='pt-4'>
                    <p className='font-bold text-base'>Você ainda não tem tarefas cadastradas</p>
                    <p className='text-base'>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}