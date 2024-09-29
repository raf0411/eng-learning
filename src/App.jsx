import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';
import ListeningPage from './pages/ListeningPage';
import SettingsPage from './pages/SettingsPage';
import Course from './components/Course';
import Quiz from './components/Quiz';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/kursus' element={<CoursePage />} />
        <Route path='/kuis' element={<QuizPage />} />
        <Route path='/pendengaran' element={<ListeningPage />} />
        <Route path='/pengaturan' element={<SettingsPage />} />
        <Route path='/kuis/:id' element={<Quiz />} />
        <Route path='/kursus/:id' element={<Course />} />
      </Route>
    )
  );


  return <RouterProvider router={router}/>;
}

export default App
