import './App.css';
import MainLandingPage from './Components/LandingPage/MainLandingPage';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import LoginForm from './pages/User Management/LoginForm';
import SignupForm from './pages/User Management/SignupForm';
import OTPVerification from './pages/User Management/OTPVerification';
import SignupSuccess from './pages/User Management/SignupSuccess';
import MultiStepForm from './pages/User Management/MultiStepForm';
import ProfileSuccess from './pages/User Management/ProfileSuccess';
import PersonalInfo from './pages/profile/PersonalInfo';
import ResetPassword from './pages/profile/ResetPassword';
import JDList from './pages/JD/JDList';
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/Signup' element={<SignupForm />} />
          <Route path='/otp' element={<OTPVerification />} />
          <Route path='/Signup-Success' element={<SignupSuccess />} />
          <Route path='/Multiform' element={<MultiStepForm />} />
          <Route path='/Profile-Success' element={<ProfileSuccess />} />
          <Route path='/Profile' element={<PersonalInfo />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/JDList' element={<JDList />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
