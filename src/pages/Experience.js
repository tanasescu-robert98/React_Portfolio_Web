import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2022 - Present"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
          Faculty of Automatic Control and Computers, University Politehnica Bucharest 
          </h3>
          <p>Master in Computer Science</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2018 - 2022"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
          Faculty of Automatic Control and Computers, University Politehnica Bucharest 
          </h3>
          <p>Bachelor in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2014 - 2018"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
            Alexandru Ioan Cuza High School
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Bucharest, Romania
          </h4>
          <p>Bacalaureat Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2006 - 2014"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> 
            School 88
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Bucharest, Romania
          </h4>
          <p>School Degree</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience