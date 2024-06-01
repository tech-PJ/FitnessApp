import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { youtubeOptions,exerciseOptions, fetchData } from '../utils/fetchData';
//import { Details } from '@mui/icons-material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';



const ExerciseDetail = () => {
 const [exerciseDetail,setExerciseDetail]=useState({});
 const [exerciseVideos, setExerciseVideos] = useState([]);
 const [targetMuscleExercises,setTargetMuscleExercises]=useState([]);
 const [equipment,setequipment]=useState([]);
 const {id}=useParams();
// window.scrollTo({ top: -1000, left: 0, behavior: 'smooth' });
 useEffect(()=>{
  const fetchExercisesData=async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
    setExerciseDetail(exerciseDetailData);
 
    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
    setExerciseVideos(exerciseVideosData.contents);
  
    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
    setTargetMuscleExercises(targetMuscleExercisesData);
    const EquipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
    setequipment(EquipmentExercisesData);
  };

  window.scrollTo({ top: -1000, left: 0, behavior: 'smooth' });

  fetchExercisesData();
 },[id])
 
  return (
    <Box sx={{width:'100vw',
      //height:'100vh'
    }}>
      
       <Detail exerciseDetail={exerciseDetail}/>
       <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
       <SimilarExercises targetMuscleExercises={targetMuscleExercises}  equipment={equipment}/> 
    </Box>
  )
}

export default ExerciseDetail