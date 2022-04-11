import { createRoot } from 'react-dom/client'

import App from './App'

const rootElement = document.querySelector('#_root_')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
} else {
  throw 'Error on mount root element.'
}
