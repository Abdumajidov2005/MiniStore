import { IoSearch } from "react-icons/io5"
import logo from "../../../public/logo/logo.png"
import { Links } from "../../services/navLinks"
import { FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <div className="container_1200 flex items-center justify-between py-7">
                    <img src={logo} alt="" />
                    <ul className="navLinks flex items-center gap-10 ">
                        {
                            Links.map((item) => {
                                return <li key={item.id}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            })
                        }
                    </ul>
                    <div className=" flex items-center gap-5">
                        <IoSearch />
                        <FaUser />
                        <span className="flex items-center gap-1">
                            <FaCartShopping />
                            (0)
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
