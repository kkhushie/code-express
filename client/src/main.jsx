import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "aos/dist/aos.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "react-owl-carousel/dist/assets/owl.carousel.css";
// import "react-owl-carousel/dist/assets/owl.theme.default.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
