import React, { useContext, useState } from 'react';
import './StudentDashboard.css';
import img1 from '../../../assets/img/school.jpg'
import UserContext from '../../../../Context/UserContext';

function StudentDashboard() {
    const { logout } = useContext(UserContext);
    const [student, setStudent] = useState({
        name: 'Rajat Thapar',
        fathersName: 'Lalit Thapar',
        college: 'College Of Architecture IET Bhaddal',
        course: 'B.Arch.',
        stream: 'Architecture',
        remarks: '',
    });

    const [dailyReport, setDailyReport] = useState(''); // State for the daily report
    const [reportHistory, setReportHistory] = useState([]); // State for report history
    const [reportDate, setReportDate] = useState(getCurrentDate()); // State for the date

    const handleLogout = () => {
        // Handle logout logic here
        logout();
        console.log('Logged out');
    };

    const handleReportChange = (e) => {
        // Update the daily report when the textarea value changes
        setDailyReport(e.target.value);
    };

    const handleSubmitReport = () => {
        // Save the current report with the date to the report history
        if (dailyReport.trim() !== '') {
            setReportHistory([...reportHistory, { date: reportDate, report: dailyReport }]);
            setDailyReport('');
            setReportDate(getCurrentDate()); // Reset the date to the current date
        }
    };

    function getCurrentDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    }

    return (
        <div className="student-dashboard">
            <div className="student-card">
            <div className="professor-image">
                    <img src={img1} alt="Professor" />
                </div>
                <div className="student-details">
                    <h2>{student.name}</h2>
                    <p>Father's Name: {student.fathersName}</p>
                    <p>College: {student.college}</p>
                    <p>Course: {student.course}</p>
                    <p>Stream: {student.stream}</p>
                    <p> Remarks: {student.remarks}</p>
                </div>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            {/* Daily Report Section */}
            <div className="report-section">
                <h3>Daily Report</h3>
                <input
                    type="date"
                    value={reportDate}
                    onChange={(e) => setReportDate(e.target.value)}
                    placeholder="Date"
                />
                <textarea
                    rows="4"
                    cols="50"
                    value={dailyReport}
                    onChange={handleReportChange}
                    placeholder="Write your daily report here..."
                />
                <button className="submit-button" onClick={handleSubmitReport}>
                    Submit Report
                </button>
            </div>

            {/* Report History Section */}
            <div className="report-history">
                <h2>Report History</h2>
                <ul>
                    {reportHistory.map((report, index) => (
                        <li key={index}>
                            <strong style={{marginBottom:"1rem"}}>Date: {report.date}</strong>
                            <p style={{margin:"1rem"}}>{report.report}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StudentDashboard;
