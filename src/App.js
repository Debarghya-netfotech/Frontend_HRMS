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
import LockForMeModal from './pages/JD/LockForMeModal';
import SignupSuccessJD from './pages/JD/SignupSuccessJD';
import JDSummary from './pages/JD/JDSummary';
import FinanceList from './pages/Finance/FinanceList';
import CandidateForm from './pages/Candidates/CandidateForm';
import FinanceCandidate from './pages/Finance/FinanceCandidate';
import FinancePayroll from './pages/Finance/FinancePayroll';

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
          <Route path='/LockModal' element={<LockForMeModal />} />
          <Route path='/JDSignUpSuccess' element={<SignupSuccessJD />} />
          <Route path='/JDSummary' element={<JDSummary />} />
          <Route path='/FinanceList' element={<FinanceList />} />
          <Route path='/Candidate-Form' element={<CandidateForm />} />
          <Route path='/FinanceCandidate' element={<FinanceCandidate />} />
          <Route path='/FinancePayroll' element={<FinancePayroll />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
