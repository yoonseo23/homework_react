import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const root = document.getElementById('root')
if (!root) throw new Error('문서에 #root 요소가 없습니다.')

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)