
// type Props{
//     name: 'string'
// }

function Button({props}:string){

    return(
        <button className="text-center bg-background text-primary border rounded-md px-3 py-0.5 " >
            {props}
        </button>
    )
}
export default Button;