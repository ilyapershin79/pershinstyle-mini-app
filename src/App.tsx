import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import ServicesScreen from './screens/ServicesScreen'
import PricingScreen from './screens/PricingScreen'
import FormsScreen from './screens/FormsScreen'
import ThankYouScreen from './screens/ThankYouScreen'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-pershin">
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/pricing" element={<PricingScreen />} />
          <Route path="/forms" element={<FormsScreen />} />
          <Route path="/thankyou" element={<ThankYouScreen />} />
          {/* Редирект всех остальных путей на / */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App