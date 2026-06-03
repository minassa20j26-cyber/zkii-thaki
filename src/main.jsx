import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './zakii-thakii-final-1'
import Lesson1 from './درس1-ما-هو-الذكاء-الاصطناعي (1)'

function Root() {
  const [page, setPage] = useState('home')
  if (page === 'lesson1') return <Lesson1 onBack={() => setPage('home')} />
  return <App onStartLesson={() => setPage('lesson1')} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
    <Analytics />
  </React.StrictMode>
)
Puis Commit changes → Commit directly to main → Commit changes.
