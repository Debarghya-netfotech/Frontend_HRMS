import './App.css';
import MainLandingPage from './Components/LandingPage/MainLandingPage';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import LoginForm from './Components/User Management/LoginForm';
import SignupForm from './Components/User Management/SignupForm';
import OTPVerification from './Components/User Management/OTPVerification';
import SignupSuccess from './Components/User Management/SignupSuccess';
import MultiStepForm from './Components/User Management/MultiStepForm';
import ProfileSuccess from './Components/User Management/ProfileSuccess';
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
// import CandidateCard from './pages/Employer/DashBoard/CandidateCard';
import JobCard from './pages/Employer/DashBoard/JobCard';
import EmpDashboard from './pages/Employer/DashBoard/Dashboard';
import EmpJDdetail from './pages/Employer/JDDetail/JDdetail';
import AddNewJDForm from './pages/Employer/New JD/AddNewJDForm';
import SelectCandidate from './pages/Recruiter/CandidatesDatabase/SelectCandidate';
import EmpCandidates from './pages/Employer/Candidates/EmpCandidates';
import EmpJDList from './pages/Employer/New JD/EmpJDList';
import EmpJDMaster from './pages/Employer/JDDetail/EmpJDMaster';
import JD_Master_Details from './pages/Employer/JDDetail/JD_Master_Details';
import Admin_About_Us from './pages/Admin/About Us/Admin_About_Us';
import Admin_BankInfo from './pages/Admin/Profile/Admin_BankInfo';
import Admin_PersonalInfo from './pages/Admin/Profile/Admin_PersonalInfo';
import Admin_Profile from './pages/Admin/Profile/Admin_Profile';
import Admin_Reset_Password from './pages/Admin/Profile/Admin_Reset_Password';
import Admin_Finance_Invoice from './pages/Admin/Finance/Admin_Finance_Invoice';
import Admin_Finance_JD_Details from './pages/Admin/Finance/Admin_Finance_JD_Details';
import AdminJd from './pages/Admin/AllJDs/AdminJd';
import AdminSummery from './pages/Admin/AllJDs/AdminSummery';
import EmployerMaster from './pages/Admin/EmployerMaster/EmployerMaster';
import AdminEmployerfile from './pages/Admin/EmployerMaster/AdminEmployerfile';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';
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
          <Route path='/Profile-Recruiter' element={<PersonalInfo />} />
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
          <Route path='/MyWorkspace' element={<AddCandidates />} />
          <Route path='/CandidatesOne' element={<CandidatesOne />} />
          <Route path='/SelectFromJD' element={<SelectFromJD />} />
          <Route path='/AddCandidateModal' element={<AddCandidateModal />} />
          <Route path='/SubmitCandidateModal' element={<SubmitCandidateModal />} />
          <Route path='/CandidateIncompleteModal' element={<CandidateIncompleteModal />} />
          <Route path='/CandidateAddedModal' element={<CandidateAddedModal />} />
          <Route path='/CandidateFeedback' element={<CandidateFeedback/>} />
          <Route path='/EmployerJd' element={<EmployerJd />} />
          <Route path='/EmployerFile' element={<EmployerFile />} />
          {/* <Route path='/CandidateCard' element={<CandidateCard />} /> */}
          <Route path='/CandidateJobCard' element={<JobCard />} />
          <Route path='/EmployerDashboard' element={<EmpDashboard />} />
          <Route path='/EmpJDdetail' element={<EmpJDdetail />} />
          <Route path='/AddJDForm' element={<AddNewJDForm />} />
          <Route path='/Employee-DashBoard' element={<EmpDashboard />} />
          <Route path='/SelectCandidate' element={<SelectCandidate />} />
          <Route path='/EmpCandidates' element={<EmpCandidates />} />
          <Route path='/EmpJDList' element={<EmpJDList />} />
          <Route path='/EmpJDMaster' element={<EmpJDMaster />} />
          <Route path='/JD_Master_Details/:id' element={<JD_Master_Details />} />




          {/* //ADMIN// */}
          <Route path='/Admin/About-Us' element={<Admin_About_Us />} />
          <Route path='/Admin/BankInfo' element={<Admin_BankInfo />} />
          <Route path='/Admin/PersonalInfo' element={<Admin_PersonalInfo />} />
          <Route path='/Admin/Profile' element={<Admin_Profile />} />
          <Route path='/Admin/Reset-Password' element={<Admin_Reset_Password />} />
          <Route path='/Admin/Finance/JD-Details' element={<Admin_Finance_JD_Details />} />
          <Route path='/Admin/Finance/invoice' element={<Admin_Finance_Invoice />} />
          <Route path='/Admin/JD/JD-Master' element={<AdminJd />} />
          <Route path='/Admin/JD/JD-Summary' element={<AdminSummery />} />
          <Route path='/Admin/Employer/Employer-Master' element={<EmployerMaster />} />
          <Route path='/Admin/Employer/Employer-Form' element={<AdminEmployerfile />} />
          <Route path='/Admin/Dashboard' element={<AdminDashboard />} />



        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
