import Logo from '../../assets/Logo.svg'

export function Header () {
    return (
        <div className="h-52 bg-gray-700 flex justify-center items-center"> 
            <img
                className='w-32 h-full'
                src={Logo}
                alt="Logo"
            />
        </div>
    )
}