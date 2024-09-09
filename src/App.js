import './App.css';
import MainLandingPage from './Components/LandingPage/MainLandingPage';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import LoginForm from './pages/Recruiter/User Management/LoginForm';
import SignupForm from './pages/Recruiter/User Management/SignupForm';
import OTPVerification from './pages/Recruiter/User Management/OTPVerification';
import SignupSuccess from './pages/Recruiter/User Management/SignupSuccess';
import MultiStepForm from './pages/Recruiter/User Management/MultiStepForm';
import ProfileSuccess from './pages/Recruiter/User Management/ProfileSuccess';
import PersonalInfo from './pages/Recruiter/profile/PersonalInfo';
import ResetPassword from './pages/Recruiter/profile/ResetPassword';
import JDList from './pages/Recruiter/JD/JDList';
import Dashboard from './pages/Recruiter/Dashboard/Dashboard'
import LockForMeModal from './pages/Recruiter/JD/LockForMeModal';
import SignupSuccessJD from './pages/Recruiter/JD/SignupSuccessJD';
import JDSummary from './pages/Recruiter/JD/JDSummary';
import FinanceList from './pages/Recruiter/Finance/FinanceList';
import CandidateForm from './pages/Recruiter/Candidates/CandidateForm';
import FinanceCandidate from './pages/Recruiter/Finance/FinanceCandidate';
import FinancePayroll from './pages/Recruiter/Finance/FinancePayroll';
import Candidates from './pages/Recruiter/Candidates/Candidates';
import AddCandidates from './pages/Recruiter/Candidates/AddCandidates';
import CandidatesOne from './pages/Recruiter/CandidatesDatabase/CandidatesOne';
import SelectFromJD from './pages/Recruiter/CandidatesDatabase/SelectFromJD';
import AddCandidateModal from './pages/Recruiter/Candidates/Modals/AddCandidateModal';
import SubmitCandidateModal from './pages/Recruiter/Candidates/Modals/SubmitCandidateModal';
import CandidateIncompleteModal from './pages/Recruiter/Candidates/Modals/CandidateIncompleteModal';
import CandidateAddedModal from './pages/Recruiter/Candidates/Modals/CandidateAddedModal';
import CandidateFeedback from './pages/Recruiter/Candidates/Modals/CandidateFeedback';
// 
import EmployerJd from './pages/Employer/EmployerData/EmployerJd'
import EmployerFile from './pages/Employer/EmployerData/EmployerFile';
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
          <Route path='/Candidates' element={<Candidates />} />
          <Route path='/AddCandidates' element={<AddCandidates />} />
          <Route path='/CandidatesOne' element={<CandidatesOne />} />
          <Route path='/SelectFromJD' element={<SelectFromJD />} />
          <Route path='/AddCandidateModal' element={<AddCandidateModal />} />
          <Route path='/SubmitCandidateModal' element={<SubmitCandidateModal />} />
          <Route path='/CandidateIncompleteModal' element={<CandidateIncompleteModal />} />
          <Route path='/CandidateAddedModal' element={<CandidateAddedModal />} />
          <Route path='/CandidateFeedback' element={<CandidateFeedback/>} />
          <Route path='/EmployerJd' element={<EmployerJd />} />
          <Route path='/EmployerFile' element={<EmployerFile />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
