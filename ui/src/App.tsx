import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Chatroom from './pages/Chatroom/Chatroom.tsx';
import Classroom from './pages/Classroom/Classroom.tsx';
import Subjects from './pages/Subjects/Subjects.tsx';
import Assignments from './pages/Assignments/Assignments.tsx';
import Profile from './pages/Profile/Profile.tsx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const App = () => {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',      // make sure full viewport width
          margin: 0,           // no margin around
          padding: 0,          // no padding around
          overflowX: 'hidden', // prevent horizontal scroll
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: "#22577a", width: '100%' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "#c7f9cc" }}>
              Education Platform
            </Typography>
            <Button component={Link} to="/" sx={{ color: "#80ed99" }}>Home</Button>
            <Button component={Link} to="/chatroom" sx={{ color: "#80ed99" }}>Chatroom</Button>
            <Button component={Link} to="/subjects" sx={{ color: "#80ed99" }}>Subjects</Button>
            <Button component={Link} to="/assingments" sx={{ color: "#80ed99" }}>Assignments</Button>
             <Button component={Link} to="/classroom" sx={{ color: "#80ed99" }}>Classroom</Button>
            <Button component={Link} to="/profile" sx={{ color: "#80ed99" }}>Profile</Button>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            backgroundColor: '#f5f5f5',
            padding: 2,
            width: '100%',      // full width
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatroom" element={<Chatroom />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
         <Paper
          component="footer"
          square
          elevation={3}
          sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            height: `50px`,
            bgcolor: '#22577a',
            color: '#c7f9cc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: (theme) => theme.zIndex.appBar - 1,
          }}
        >
         Education Platform
        </Paper>
      </Box>
    </Router>
  );
};

export default App;