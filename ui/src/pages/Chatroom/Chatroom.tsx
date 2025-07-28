import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  AppBar,
  Toolbar,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import './Chatroom.scss';

const socket = io('http://localhost:3000');
const subjects = ['Math', 'Science', 'History'];

const Chatroom = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [currentSubject, setCurrentSubject] = useState(subjects[0]);

  const sendMessage = () => {
    if (input.trim() === '') return;
    socket.emit('chat message', { text: input, subject: currentSubject });
    setMessages((prev) => [...prev, { sender: 'me', text: input }]);
    setInput('');
  };

  useEffect(() => {
    socket.on('chat message', (msg) => {
      if (msg.subject === currentSubject) {
        setMessages((prev) => [...prev, { sender: 'other', text: msg.text }]);
      }
    });

    return () => {
      socket.off('chat message');
    };
  }, [currentSubject]);

  const switchTo = (subject: string) => {
    setCurrentSubject(subject);
    setMessages([]); // clear messages when switching rooms
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Paper
        elevation={3}
        sx={{
          width: '20%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#ffffff',
        }}
      >
        <Typography variant="h6" align="center" sx={{ mt: 2, mb: 1 }}>
          Subjects
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            px: 2,
            pb: 4, // More space at the bottom
          }}
        >
          <List>
            {subjects.map((subject) => (
              <ListItem key={subject} disablePadding>
                <ListItemButton
                  selected={subject === currentSubject}
                  onClick={() => switchTo(subject)}
                >
                  <ListItemText primary={subject} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>

      {/* Main Chat Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              {currentSubject} Chatroom
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 2 }}>
          <Paper
            elevation={3}
            sx={{ p: 2, height: '60vh', overflowY: 'auto', bgcolor: '#f5f5f5' }}
          >
            {messages.map((msg, idx) => (
              <Box key={idx} mb={2}>
                <Typography
                  variant="subtitle2"
                  color={msg.sender === 'me' ? 'primary' : 'secondary'}
                >
                  {msg.sender === 'me' ? 'You' : 'Student'}:
                </Typography>
                <Typography variant="body1">{msg.text}</Typography>
              </Box>
            ))}
          </Paper>

          <Box display="flex" alignItems="center" mt={2}>
            <TextField
              fullWidth
              label="Type your message"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button
              variant="contained"
              sx={{ ml: 2, height: '56px' }}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Chatroom;