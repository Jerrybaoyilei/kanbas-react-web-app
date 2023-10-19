import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import React from "react";
import '../../index.css';
import "./index.css";
import CourseTopNavigation from "./CourseTopNavigation";

function Courses() {
    const { courseId } = useParams();
    // const course = db.courses.find((course) => course._id === courseId);

    return (
        <div>
            <CourseTopNavigation />
            <hr className="mb-3" />
            <div>
                <CourseNavigation />
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "70px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<h1>Modules</h1>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default Courses;