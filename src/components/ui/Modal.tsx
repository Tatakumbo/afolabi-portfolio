import { NavLink } from "react-router-dom";


export default function Modal() {

    return (
        <div className="w-full h-full blur">
            <div className='flex gap-4 [&>NavLink]:cursor-pointer'>
                <NavLink to="/" className={active}> Home</NavLink>
                <NavLink to="/about" className={active}>About</NavLink >
                <NavLink to="/projects" className={active}>Projects</NavLink >
                <NavLink to="/more" className={active}>More</NavLink >
                <NavLink to="/home" className={active}><button>search nd co</button></NavLink >
            </div>
        </div>
    )
}