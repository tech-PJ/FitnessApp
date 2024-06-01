import React, { useContext } from 'react';
import { Stack,Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext  } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';
//import 'react-horizontal-scrolling-menu/dist/styles.css';


const LeftArrow = () => {
    const { scrollPrev } =  useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } =  useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="left-arrow" />
      </Typography>
    );
  };
  
const HorizontalScrollbar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=>(
            <Box
                key={item.id||item}
                itemID={item.id||item}
                title={item.id||item}
                m="0 100px"
                
            >         
              {isBodyParts? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>:<ExerciseCard exercise={item}/>}
            </Box>
        )
        )}
    </ScrollMenu >
    </div>
  )
}

export default HorizontalScrollbar