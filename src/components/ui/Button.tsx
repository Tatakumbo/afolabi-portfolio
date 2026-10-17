import type { ReactNode } from "react";

type ButtonProps = {
    label: 'string';
    icon?: ReactNode;
}

function Button({label, icon}:ButtonProps){

    return(
        <button className="inline-flex gap-1 items-center bg-background text-primary border rounded-full px-2  " >
            {icon && <span>{icon}</span>}
            <span>{label}</span>
            
        </button>
    )
}
export default Button;