import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

const action = (
  <Button  sx={{
            backgroundColor: "#c7f9cc",
          }}
           size="small">
    See message
  </Button>
);

const ChatroomSnackbar = () =>{
  return (
    <Stack
        spacing={2} 
        sx={{ 
          maxWidth: 600,
          backgroundColor: "#fff",
          }}>
      <SnackbarContent
        sx={{ 
          backgroundColor: "#fff",
          color: "#22577a",
          '& .MuiSnackbarContent-message': {
              whiteSpace: 'pre-line',
          }
        }}
        message={
          'Having a hard time with answer 4 to the recent homework. Can anyone help me with this? \nJuly, 3rd, 2025'
        } action={action}
      />
       <SnackbarContent
       sx={{ 
          backgroundColor: "#fff",
          color: "#22577a",
          '& .MuiSnackbarContent-message': {
              whiteSpace: 'pre-line',
          }
        }}
        message={'Grades have been posted for Biology 101 \nJuly, 10th, 2025'}
        action={action}
      />
      <SnackbarContent
       sx={{ 
          backgroundColor: "#fff",
          color: "#22577a",
          '& .MuiSnackbarContent-message': {
              whiteSpace: 'pre-line',
          }
        }}
        message={'Anyone still need a partner for our upcoming group project? \nJuly, 10th, 2025'}
        action={action}
      />
      <SnackbarContent
        sx={{ 
          backgroundColor: "#fff",
          color: "#22577a",
          '& .MuiSnackbarContent-message': {
              whiteSpace: 'pre-line',
          }
        }}
        message={
          'New assignment ready \nJuly, 19th, 2025'
        }
        action={action}
      />
    </Stack>
  );
}

export default ChatroomSnackbar;