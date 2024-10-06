import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


export default function App() {
  return (
    <div>
      <AppHeader />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Subject Universe
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </div>
  );
}