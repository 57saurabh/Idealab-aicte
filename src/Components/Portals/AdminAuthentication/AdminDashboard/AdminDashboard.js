import React, { useContext, useEffect, useState } from 'react';
import './AdminDashboard.css';
import img1 from "../../../assets/img/college.jpg";
import UserContext from '../../../../Context/UserContext';
import axios from 'axios';


function Dashboard() {
    const { logout } = useContext(UserContext);
    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const authToken = localStorage.getItem('token') 


    const [professor] = useState({
        name: 'Prof. John Doe',
        department: 'Computer Science',
        image: img1
    });

    const [students] = useState([
        { sNo: 1, name: 'Rajat Thapar', fathersName: 'Lalit Thapar', college: 'College Of Architecure IET Bhaddal', course: 'B.Arch.', stream: 'Architecture', remarks: '' },
        { sNo: 2, name: 'Mohd Ishfaq Khan', fathersName: 'S. Mohd Maqbool Khan', college: 'Adesh Institute of Technolgoy', course: 'CSE', stream: 'Engineering', remarks: 'Subject to verification of approval status of the college/course from the joining report uploaded on Web Portal of AICTE' },
        // Add more students here
    ]);

    const handleLogout = () => {
        // Handle logout logic here
        logout();
        console.log('Logged out');
    };


    
    useEffect(() => {
        const fetchData = async () =>{
            // Define the URLs for the API endpoints
            const apiUrl1 = 'http://localhost:8080/user';
            const apiUrl2 = 'http://localhost:8080/student';
        
            // Define the headers with the authentication token
            const headers = {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            };
        
            try {
              const response1= await axios.get('http://localhost:8080/user', { headers })
                  setData1(response1);
                  console.log(data1)
                }
             catch (error) {
              // Handle errors for the first API request
              console.error('API Error 1:', error);
            }
            
    
        // Make the second API request using Axios within a try...catch block
        try {
          const response2 = axios.get('http://localhost:8080/student', { headers })
              setData2(response2);
              console.log(data2)
            }
         catch (error) {
          // Handle errors for the second API request
          console.error('API Error 2:', error);
        }
    };
    fetchData();
      }, []); 

    

    return (
        <div className="dashboard">
           <div className="professor-card">
                <div className="professor-image">
                    <img src={professor.image} alt="Professor" />
                </div>
                <div className="professor-info">
                    <h2>{professor.name}</h2>
                    <p>{professor.department}</p>
                </div>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="students-list">
                <h2>Students</h2>
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Student's Name</th>
                            <th>Father's Name</th>
                            <th>Name of College/Institution</th>
                            <th>Name of Course</th>
                            <th>Stream</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.sNo}</td>
                                <td>{student.name}</td>
                                <td>{student.fathersName}</td>
                                <td>{student.college}</td>
                                <td>{student.course}</td>
                                <td>{student.stream}</td>
                                <td>{student.remarks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
