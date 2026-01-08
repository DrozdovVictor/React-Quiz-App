import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  const [mobileNav, setModileNav] = useState(false)

  if (mobileNav) document.body.style.overflow = "hidden"
  else document.body.style.overflow = "visible"

  return (
    <header className="header w-full backdrop-blur-[7px] shadow-[3px_3px_10px_var(--light-grey-color)] fixed">
      <div className="header__container container">
        <div className="header__content flex h-20 items-center tablet:justify-around justify-between gap-x-3">
          <div className="header__logo flex gap-x-2 items-center">
            <div className="header__logo-block tablet:h-6 tablet:w-6 w-5 h-5 rounded-sm"></div>
            <p className="header__logo-text font-bold text-xl mobile-lg:text-[16px] text-[14px]">
              React Dev Challenge
            </p>
          </div>
          <nav className="header__nav tablet:block">
            <ul className="header__nav-ul gap-x-3 tablet:flex hidden">
              <li className="header__nav-li">
                <Link
                  to="."
                  className="header__nav-li-text hover:cursor-pointer duration-300"
                >
                  Главная
                </Link>
              </li>
              <li className="header__nav-li">
                <Link
                  to="quiz"
                  className="header__nav-li-text hover:cursor-pointer duration-300"
                >
                  Викторина
                </Link>
              </li>
              <li className="header__nav-li">
                <Link
                  to="results"
                  className="header__nav-li-text hover:cursor-pointer duration-300"
                >
                  Результаты
                </Link>
              </li>
            </ul>
            <div
              className={`header__nav-mobile ${
                mobileNav ? "active" : ""
              } block w-[25px] h-5 tablet:hidden relative`}
              onClick={() => setModileNav(!mobileNav)}
            >
              <span className="header__nav-mobile-line top-0 absolute block w-full h-1 rounded-full hover:cursor-pointer duration-300"></span>
              <span className="header__nav-mobile-line top-2 absolute block w-full h-1 rounded-full hover:cursor-pointer duration-300"></span>
              <span className="header__nav-mobile-line top-4 absolute block w-full h-1 rounded-full hover:cursor-pointer duration-300"></span>
            </div>
          </nav>
        </div>

        <div
          className={`header__nav-mobile-content ${
            mobileNav ? "active" : ""
          } w-full h-screen duration-300`}
        >
          <ul className="header__nav-ul-mobile gap-y-3 mt-5 tablet:hidden flex flex-col">
            <li className="header__nav-li-mobile text-center ">
              <Link
                to="."
                onClick={() => setModileNav(false)}
                className="header__nav-li-text hover:cursor-pointer duration-300"
              >
                Главная
              </Link>
            </li>
            <li className="header__nav-li-mobile text-center">
              <Link
                to="quiz"
                onClick={() => setModileNav(false)}
                className="header__nav-li-text hover:cursor-pointer duration-300"
              >
                Викторина
              </Link>
            </li>
            <li className="header__nav-li-mobile text-center">
              <Link
                to="results"
                onClick={() => setModileNav(false)}
                className="header__nav-li-text center hover:cursor-pointer duration-300"
              >
                Результаты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
