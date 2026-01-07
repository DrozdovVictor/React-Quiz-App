import "./Footer.css"

function Footer() {
  return (
    <footer className="footer py-12">
      <div className="footer__container container">
        <div className="footer__content flex flex-col items-center gap-y-4.5">
          <ul className="footer__icons-row flex gap-x-4">
            <li className="footer__icon">
              <a href="https://github.com/" target="__blank">
                <i className="fab fa-github footer__icon-img  text-[25px] duration-300 hover:cursor-pointer"></i>
              </a>
            </li>
            <li className="footer__icon">
              <a href="https://x.com/" target="__blank">
                <i className="fab fa-twitter footer__icon-img text-[25px] duration-300 hover:cursor-pointer"></i>
              </a>
            </li>
            <li className="footer__icon">
              <a href="https://www.linkedin.com/" target="__blank">
                <i className="fab fa-linkedin footer__icon-img text-[25px] duration-300 hover:cursor-pointer"></i>
              </a>
            </li>
          </ul>
          <p className="footer__text tablet:text-left tablet:max-w-full text-center max-w-[35z0px] tablet:text-[16px] text-[14px]">
            &copy; 2024 React Dev Challenge. Создано с ❤️ для разработчиков.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
