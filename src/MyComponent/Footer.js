import React from 'react'
//import './footer.css'
export const Footer = () => {
    let footerStyle={
        position: "relative",
        /* position: sticky; */
        width: "100%",
        top: "50vh",
        border:"2px solid red",
    }
    return (
        <footer className="bg-dark text-light py-3" >
            <p className="text-center">Copyright &copy; MyTodoList.Com</p>
        </footer>
    )
}
