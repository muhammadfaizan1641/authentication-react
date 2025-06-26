import AuthPage from "./Auth";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return(
     <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="*" element={<Navigate to="/auth/signin" replace/>}/>
      </Routes>
     </Router>
  )
}

export default App;
