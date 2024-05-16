import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Attendance from './components/Attendance';
import AttendLog from './components/AttendLog';
import Signup from './components/Signup';

//1. "/" 로그인
//2. "/signup"
//3. "attendlog"
//4. "attendance"
function App() {
  
  return (
  <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/attendlog" element={<AttendLog />} />
      <Route path="/attendance" element={<Attendance />} />
    </Routes>
  </>
  )
};

export default App;
