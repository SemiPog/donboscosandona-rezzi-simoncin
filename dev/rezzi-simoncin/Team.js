import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function TeamMember(props) {
  const { name, role, imageUrl } = props;
  return (
    <Box sx={{ textAlign: 'center' }}>
      <img src={imageUrl} alt={name} width="150" height="150" />
      <Typography variant="h5" gutterBottom>
        {name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {role}
      </Typography>
    </Box>
  );
}

export default function Team() {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg' },
    { name: 'Jane Doe', role: 'CTO', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Bob Smith', role: 'Marketing Manager', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Sara Johnson', role: 'Designer', imageUrl: 'https://via.placeholder.com/150' },
  ];
  
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Awesome Team
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 8 }}>
        This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Link href="#">
              <TeamMember {...member} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
