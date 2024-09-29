import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';
import ListeningPage from './pages/ListeningPage';
import SettingsPage from './pages/SettingsPage';
import QuizLvl1 from './components/QuizLvl1';
import QuizLvl2 from './components/QuizLvl2';
import QuizLvl3 from './components/QuizLvl3';
import Course from './components/Course';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/kursus' element={<CoursePage />} />
        <Route path='/kuis' element={<QuizPage />} />
        <Route path='/pendengaran' element={<ListeningPage />} />
        <Route path='/pengaturan' element={<SettingsPage />} />
        <Route path='/quiz-lvl-1' element={<QuizLvl1 />} />
        <Route path='/quiz-lvl-2' element={<QuizLvl2 />} />
        <Route path='/quiz-lvl-3' element={<QuizLvl3 />} />
        <Route path='/kursus/:id' element={<Course />} />
      </Route>
    )
  );


  return <RouterProvider router={router}/>;
}

export default App
