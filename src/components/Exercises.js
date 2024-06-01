import React ,{useEffect,useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Stack, Box, Grid  , Typography} from '@mui/material/';

import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises,setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);


    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'},width: '80vw'}}
      mt="50px"
      p="50px"
      
    >
      <Typography variant='h3' mb="46px">
        Showing result
      </Typography>
      
     
      <Grid ml={15} container sx={{ rowGap: 8, columnGap: 40 }} justifyContent="center">
        {exercises.map((exercise, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx} sx={{ pb: 2 }}>
            <ExerciseCard exercise={exercise} />
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
          
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box> 
  )
}

export default Exercises