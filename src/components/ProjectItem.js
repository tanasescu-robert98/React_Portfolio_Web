import React from 'react'
import {useNavigate} from 'react-router-dom';
import { animate, motion } from "framer-motion"

function ProjectItem({image,name,id}) {
  const navigate = useNavigate()
  return (
    <motion.div className='projectItem' whileHover={{scale: 1.15}} transition={{ duration: 0.015 }} onClick={() => {navigate("/project/" + id)}}> 
          <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
    </motion.div>

  )
}

export default ProjectItem;