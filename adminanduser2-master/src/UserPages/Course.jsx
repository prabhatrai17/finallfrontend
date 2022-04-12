import { useState,React,useEffect } from "react";

import Button from '@mui/material/Button';
import "./Course.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Delete from '@mui/icons-material/Delete';
import AddBox from '@mui/icons-material/AddBox';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
// import  from '../Components/InstituteCard';

import {Link,Outlet,} from  "react-router-dom";
import CourseSearchFilter from '../Components/CourseSearchFilter';
import HeaderStudent from '../Components/HeaderStudent';

function Course(props) {
   const [data,setData]=useState([]);

   useEffect(()=>{
    getusers();
   },[]);
   
   function getusers(){
     fetch("http://localhost:8080/admin/viewCourses")
     .then((response)=>response.json())
     .then((p) => setData(p)
          
     );
   }
   

 
    return (
        <div>
          <HeaderStudent/>
             <CourseSearchFilter/>   


            <div>
            {data.map(datas=>(
           <div key={datas.courseId} className="card">
  
  <div className="container">
    

   

    {/* <Grid container   item xs={12} sm={4} md={12}> */}
        {/* <Grid  container className="rowgrid"  rowSpacing={1} columnSpacing={{xs:1,sm:2,md:3}}> */}
        <Grid container  columnSpacing="3" item xs={12} sm={4} md={12}>
                  <Grid  className="gridelement" >
                  <p>course Id : {datas.courseId} </p>
                  </Grid>
                  
                  <Grid  className="gridelement">
                  <p>Course Name : {datas.courseName}</p>
                  </Grid>
                 
                  <Grid   className="gridelement">
                  <p> Course Duration : {datas.courseDuration}</p>
                  </Grid>
                 
               </Grid>

               <Grid container className="rowgrid"  item xs={12} sm={4} md={12}>
                  <Grid  className="gridelement">
                 <p>Course Timing : {datas.courseTiming}</p>
                  </Grid>
                  
                  <Grid className="gridelement" >
                  <p  >Students enrolled : {datas.courseStudentCount}</p>
                  </Grid>
                  
                  <Grid  className="gridelement" >
                 <p>Academic year : {datas.courseAcademicYear}</p>
                  </Grid>
                  
                  </Grid>

                  
                  <Grid container className="rowgrid"  item xs={12} sm={4} md={12}>
                  <Grid  className="gridelement">
                 <p>Percentage Required :  {datas.courseRequiredPercentage}</p>
                  </Grid>
                  <Grid className="gridelement" >
                  <p  >Course Description : {datas.courseDescription}</p>
                  </Grid>
                 
               </Grid>

               <Grid container className="rowgrid"  item xs={12} sm={4} md={12}>
                  <Grid  className="gridelement">
                 <p>Institute Name :  {datas.instituteName}</p>
                  </Grid>
                  </Grid>



  </div>

  <div>
  <Link   to="/user/EnrollCourse" style={{color:"white",textDecoration:"none"}} >
     <Button variant='outlined' startIcon={<AddBox/>} style={{marginLeft:"10px",zIndex:"-1"} }  >Enroll</Button>
     </Link>
     </div>
  <div>
 
  </div>
</div>

            ))}       
        </div>
        <Outlet />
            </div>
    );
}

export default Course;