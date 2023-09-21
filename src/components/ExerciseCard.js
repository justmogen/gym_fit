import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#0051FE', fontSize: '14px', borderRadius: '12px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#ffF', background: '#404040', fontSize: '14px', borderRadius: '12px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="25px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '20px', xs: '18px' } }} mt="8px" pb="12px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
