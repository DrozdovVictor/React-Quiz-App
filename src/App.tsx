import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Main from "./layouts/Main/Main"
import Quiz from "./layouts/Quiz/Quiz"
import Result from "./layouts/Results/Results"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="results" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
