import {Sun, Moon} from 'lucide-react';


export default function Navbar(){


    return(
        <div className='flex p-3 justify-between text-black bg-background border-b-2 border-ring '>
            <span>AF</span>
            <ul className='flex gap-4 [&>li]:cursor-pointer'>
                <li >Home</li>
                <li >About</li>
                <li>Projects</li>
                <li>More</li>
                <li><button>search nd co</button></li>
            </ul>
            <span><Sun size={20} /></span>
        </div>
    )
}
