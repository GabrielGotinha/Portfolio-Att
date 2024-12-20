import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer () {
    return (
        <>
        

            <footer bg="dark" data-bs-theme="dark" className="h-16  bg-body-tertiary  mt-auto flex flex-col  ">
                
                    <div className="gap-2 flex-grow" style={{display:'flex', justifyContent: 'center'}}>
                    <a className="text-white text-3xl mt-3" href="https://github.com/GabrielGotinha" target='_blank'><FaGithub /></a>
                        <a className="text-white text-3xl mt-3" href="https://www.linkedin.com/in/gabriel-angello" target='_blank'><FaLinkedin /></a>
                    </div>
            </footer>
        
        </>
    )
}