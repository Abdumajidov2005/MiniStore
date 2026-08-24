import { FaDhl, FaFacebookF } from "react-icons/fa"
import logo from "../../../public/logo/logo.png"
import { footers, Links } from "../../services/navLinks"

function Footer() {
  return (
    <>
      <footer>
        <div className="container_1200 ">
          <div className="flex items-start justify-between">
            <div className="w-[300px]">
              <img src={logo} alt="" />
              <p>
                Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
              </p>
              <div className="flex items-center gap-3">
                <FaFacebookF />
                <FaFacebookF />
                <FaFacebookF />
                <FaFacebookF />
                <FaFacebookF />
              </div>
            </div>
            <ul className="navLinks w-[150px]">
              <li>Quick links</li>
              {
                Links.map((item) => {
                  return <li key={item.id}>{item.title}</li>
                })
              }
            </ul>
            <ul className="navLinks w-[250px]">
              <li>Help & info</li>
              {
                footers.map((item) => {
                  return <li key={item.id}>{item.title}</li>
                })
              }
            </ul>
            <div className="w-[300px]">
              <h1>
                Contact us
              </h1>
              <p>
                Do you have any queries or suggestions?
                <span>
                  yourinfo@gmail.com
                </span>
              </p>
              <p>
                If you need support? Just give us a call.
                <span>
                  +55 111 222 333 44
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <p>
                We ship with:
                <span><FaDhl /></span>
              </p>
              <p>
                We ship with:
                <span><FaDhl /></span>
              </p>
            </div>
            <p>© Copyright 2023 MiniStore. Design by TemplatesJungle  </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
