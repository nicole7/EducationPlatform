import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import './Home.scss';
import { Box, Snackbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useState } from 'react';
import NotifcationSnackbar from '../../Sidebar/NotifcationSnackbar.tsx';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 200 },
];

const rows = Array.from({ length: 50 }, (_, i) => ({
  id: `Subject ${i + 1}`,
  name: `Details for subject ${i + 1}`,
}));

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        display: 'flex',
        height: 'calc(100vh - 64px - 56px)', // 64px for AppBar, 56px for Footer
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          borderRight: '1px solid #ccc',
        }}
      >
      <NotifcationSnackbar/>
      </Box>
      <Box
        sx={{
          flex: 2,
          overflowY: 'auto',
          p: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: "#22577a" }}>
            Announcements & News
          </Typography>
          <Typography variant="body1" sx={{ color: "#22577a" }}>
            Welcome to the Education Platform! Stay tuned for the latest updates and announcements here.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;