import { Link } from "react-router-dom"
import "./Main.css"

function Main() {
  return (
    <main className="main">
      <div className="main__container container">
        <div className="main__content flex items-center pt-35 pb-20 flex-col gap-y-25">
          <div className="main__heading-block flex laptop-lg:gap-y-5 gap-y-3 flex-col">
            <h1 className="main__heading font-medium laptop-lg:text-[45px] text-[40px] text-center mobile-lg:leading-auto leading-13">
              <strong>React Dev</strong>{" "}
              <span className="challenge-text">Challenge</span>
            </h1>
            <p className="main__text text-center mx-auto laptop-lg:text-[24px] laptop-lg:max-w-full mobile-lg:max-w-[450px] max-w-[300px] mobile-lg:text-[20px] text-[16px] ">
              Интерактивная мини-игра для проверки знаний по JavaScript и React
            </p>
            <div className="main__btns-row flex tablet:flex-row flex-col items-center gap-y-4 justify-center mt-5 laptop-lg:gap-x-10 gap-x-7">
              <Link
                to="/quiz"
                className="main__play-btn border-3 px-7 py-3 rounded-[10px] flex items-center justify-center gap-x-3 duration-300 hover:cursor-pointer hover:scale-[1.1]"
                type="button"
              >
                <i className="fas fa-play"></i>
                <p className="main__btn-text font-semibold">Начать игру</p>
              </Link>
              <button
                className="main__more-btn border-3 px-7 py-3 rounded-[10px] flex items-center justify-center gap-x-3 duration-300 hover:cursor-pointer"
                type="button"
              >
                <i className="fas fa-info-circle"></i>
                <p className="main__btn-text font-semibold">Подробнее</p>
              </button>
            </div>
          </div>
          <ul className="main__cards flex laptop-lg:flex-row gap-y-[35px] flex-col justify-center w-full gap-x-7 ">
            <li className="main__card flex flex-col gap-y-3 flex-1 p-5 rounded-[10px] hover:cursor-pointer duration-300 hover:shadow-[0px_7px_10px_var(--light-grey-color)] tablet:items-start items-center">
              <div className="main__card-img-block w-11 h-11 flex items-center justify-center rounded-[10px]">
                <i className="fas fa-code main__card-img rounded-[10px]"></i>
              </div>
              <h2 className="main__card-heading font-semibold text-[22px] tablet:text-left text-center">
                JavaScript & React
              </h2>
              <p className="main__card-text sm:text-left text-center">
                Проверь свои знания современных концепций и лучших практик
              </p>
            </li>
            <li className="main__card flex flex-col gap-y-3 flex-1 p-5 rounded-[10px] hover:cursor-pointer duration-300 hover:shadow-[0px_7px_10px_var(--light-grey-color)] tablet:items-start items-center">
              <div className="main__card-img-block w-11 h-11 flex items-center justify-center rounded-[10px]">
                <i className="fas fa-chart-line main__card-img rounded-[10px]"></i>
              </div>
              <h2 className="main__card-heading font-semibold text-[22px] tablet:text-left text-center">
                Прогресс в реальном времени
              </h2>
              <p className="main__card-text tablet:text-left text-center">
                Отслеживай свой прогресс с красивыми графиками и статистикой
              </p>
            </li>
            <li className="main__card flex flex-col gap-y-3 flex-1 p-5 rounded-[10px] hover:cursor-pointer duration-300  hover:shadow-[0px_7px_10px_var(--light-grey-color)] tablet:items-start items-center">
              <div className="main__card-img-block w-11 h-11 flex items-center justify-center rounded-[10px]">
                <i className="fas fa-trophy main__card-img rounded-[10px]"></i>
              </div>
              <h2 className="main__card-heading font-semibold text-[22px] tablet:text-left text-center">
                Достижения
              </h2>
              <p className="main__card-text sm:text-left text-center">
                Зарабатывай достижения и делись результатами с друзьями
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Main
