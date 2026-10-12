import {Sun, Moon} from 'lucide-react';


export default function Navbar(){


    return(
        <div className='flex '>
            <span>AF</span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>More</li>
                <li><button>search nd co</button></li>
            </ul>
            <span><Sun size={30} /></span>
        </div>
    )
}
