import { questions } from "../../data/questions"
import { userData } from "../../data/userdata"
import { Link } from "react-router-dom"
import "./Results.css"

function Result() {
  return (
    <div className="result tablet:pt-35 pt-30">
      <div className="result__container container">
        <div className="result__content mx-auto max-w-[1000px] p-7 rounded-[15px] shadow-[0px_7px_10px_var(--light-grey-color)]">
          <div className="result__heading-block flex flex-col items-center">
            <div className="result__trophy-block flex justify-center items-center rounded-full mobile-lg:h-20 mobile-lg:w-20 w-17 h-17 mb-5">
              <i className="fas fa-trophy text-white mobile-lg:text-2xl text-xl"></i>
            </div>
            <h1 className="result__heading font-bold mobile-lg:text-[28px] text-[24px] mb-2">
              Поздравляем!
            </h1>
            <p className="resulr__heading-text mobile-lg:text-[18px] text-[16px]">
              Вы завершили викторину
            </p>
          </div>
          <div className="result__statisics-block mt-3 flex gap-y-7 flex-wrap">
            <div className="result__right-answers-block w-full py-7 rounded-[15px] flex flex-col items-center">
              <h2 className="result__right-answers font-bold mobile-lg:text-[55px] leading-18 text-[45px]">
                {userData.score}/{questions.length}
              </h2>
              <p className="result__rigth-answers-text mobile-lg:text-[18px] text-[16px]">
                Ваш результат
              </p>
            </div>
            <ul className="result__statistics flex gap-5 w-full flex-wrap">
              <li className="result__statictic-item flex flex-col items-center flex-1 p-4 rounded-[10px]">
                <p className="result__statictic-number mobile-lg:text-[24px] text-[22px] font-bold">
                  {userData.score}
                </p>
                <p className="result__statictic-text text-center mobile-lg:text-[16px] text-[14px]">
                  Правильных ответов
                </p>
              </li>
              <li className="result__statictic-item flex flex-col items-center flex-1 p-4 rounded-[10px]">
                <p className="result__statictic-number mobile-lg:text-[24px] text-[22px] font-bold ">
                  {questions.length - userData.score}
                </p>
                <p className="result__statictic-text text-center mobile-lg:text-[16px] text-[14px]">
                  Неправильных ответов
                </p>
              </li>
              <li className="result__statictic-item flex flex-col items-center flex-1 p-4 rounded-[10px]">
                <p className="result__statictic-number mobile-lg:text-[24px] text-[22px] font-bold">
                  {(userData.score / questions.length) * 100}%
                </p>
                <p className="result__statictic-text text-center mobile-lg:text-[16px] text-[14px]">
                  Успешность
                </p>
              </li>
            </ul>
          </div>
          <nav className="result__nav-block mt-7">
            <ul className="result__nav-ul flex gap-x-3 tablet:flex-row flex-col gap-y-5">
              <li className="result__nav-li grow">
                <Link
                  to="/quiz"
                  className="result__nav-link flex gap-x-2 py-3 font-semibold rounded-[10px] justify-center items-center h-full duration-300 px-5"
                >
                  <p className="text-center mobile-lg:text-[16px] text-[14px]">
                    <i className="fas fa-redo mr-2"></i> Попробовать снова
                  </p>
                </Link>
              </li>
              <li className="result__nav-li grow">
                <Link
                  to="/"
                  className="result__nav-link flex gap-x-2 py-3 font-semibold rounded-[10px] justify-center items-center h-full border-2 duration-300 px-5"
                >
                  <p className="text-center mobile-lg:text-[16px] text-[14px]">
                    <i className="fas fa-share-alt mr-2"></i> Поделиться
                    результатом
                  </p>
                </Link>
              </li>
              <li className="result__nav-li grow">
                <Link
                  to="/"
                  className="result__nav-link flex gap-x-2 py-3 font-semibold rounded-[10px] justify-center items-center h-full border-2 duration-300 px-5"
                >
                  <p className="text-center mobile-lg:text-[16px] text-[14px]">
                    <i className="fas fa-home mr-2"></i> На главную
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="result__devider tablet:mt-25 mt-20" />
    </div>
  )
}

export default Result
