import { Box, Typography, Card, CardContent } from '@mui/material';

const subjects = [
  {
    name: 'Mathematics',
    teacher: 'Ms. Smith',
    homework: 'Complete exercises 5-10 on page 42',
    syllabus: 'Algebra, Geometry, Calculus, Statistics',
    companionMaterial: 'Khan Academy, Math Workbook',
  },
  {
    name: 'English Literature',
    teacher: 'Mr. Johnson',
    homework: "Read Chapter 3 of 'To Kill a Mockingbird'",
    syllabus: 'Poetry, Novels, Drama, Essay Writing',
    companionMaterial: 'SparkNotes, Grammar Guide',
  },
  {
    name: 'Biology',
    teacher: 'Dr. Lee',
    homework: 'Prepare a presentation on Photosynthesis',
    syllabus: 'Cell Biology, Genetics, Ecology, Evolution',
    companionMaterial: 'Biology Textbook, Crash Course Videos',
  },
];

const Subjects = () => {
  return (
    <Box
      sx={{
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 64px)', // adjust if you have AppBar
        p: 5,
        mr: 4,
        backgroundColor: '#f9f9f9',
      }}
    >
      {subjects.map((subject, idx) => (
        <Card key={idx} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{subject.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Teacher:</strong> {subject.teacher}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Homework:</strong> {subject.homework}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Syllabus:</strong> {subject.syllabus}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Companion Material:</strong> {subject.companionMaterial}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Subjects;