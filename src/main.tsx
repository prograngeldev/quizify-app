import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import MantineUIProvider from './providers/MantineUIProvider.tsx'
import MainLayout from './layout/MainLayout.tsx'
import WelcomePage from './pages/WelcomePage.tsx';

import "./styles/global.css"
import PageNotFound from './pages/PageNotFound.tsx';
import CategoryPage from './pages/CategoryPage.tsx';
import QuizStartPage from './pages/QuizStartPage.tsx';
import QuizPage from './pages/QuizPage.tsx';
import QuizResults from './pages/QuizResult.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineUIProvider>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/quiz-info" element={<QuizStartPage />} />
            <Route path='start-quiz' element={<QuizPage />} />
            <Route path="/quiz-result" element={<QuizResults />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </MantineUIProvider>
  </StrictMode>,
)
