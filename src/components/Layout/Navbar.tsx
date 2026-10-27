import { Sun, Moon } from 'lucide-react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
 const active = ({isActive} : {isActive:boolean}) => {
     if (isActive) return('font-bold');
        else return('');
 }    

    return (
        <div className='flex p-3 justify-between text-black bg-background border-b-2 border-ring '>
            <span>AF</span>
            <div className='flex gap-4 [&>NavLink]:cursor-pointer'>
                <NavLink  to="/" className = {active}> Home</NavLink>
                <NavLink  to="/about"  className = {active}>About</NavLink >
                <NavLink to="/projects"  className = {active}>Projects</NavLink >
                <NavLink to="/more"  className = {active}>More</NavLink >
                <NavLink to="/home"  className = {active}><button>search nd co</button></NavLink >
            </div>
            <span><Sun size={20} /></span>
        </div >
    )
}
