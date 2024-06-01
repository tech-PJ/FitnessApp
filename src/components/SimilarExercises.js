
import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({targetMuscleExercises,equipment}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h4' mb={5}>Exercises that Target the same Muscle group</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>
          :<Loader/>}
      </Stack>
      <Typography variant='h4' mb={5}>Exercises that use the same Equipment group</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {equipment.length ? <HorizontalScrollbar data={equipment}/>
          :<Loader/>}
      </Stack>
    
    </Box>
  )
}

export default SimilarExercises