import React, {useEffect,useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';




const SearchExercises = ({setBodyPart,bodyPart,setExercises}) => {
  const [search,setSearch]=useState("");
 
  const [bodyParts,setBodyParts]=useState([]);
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  




  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 0, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Full viewport height
      width: '100vw',  // Full viewport width
      p: '20px'
    }}>
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          onChange={(e)=> setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
          <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative',width:'100vw', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
    </Box>
  )
}

export default SearchExercises