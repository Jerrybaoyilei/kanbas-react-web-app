import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import '../../index.css';
import './index.css';
import { GoSearch } from "react-icons/go";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            {/* Search bar and buttons above the assignments */}
            <div className="row">
                <div className="col-3 mb-3">
                    <div className="input-group">
                        <span className="input-group-text wd-input-logo wd-input-group-search-assignment" id="assignment-search-icon">
                            <GoSearch />
                        </span>
                        <input type="text" className="form-control wd-input-textbar" placeholder="Search for Assignment" aria-label="Search for assignment" aria-describedby="assignment-search-icon"></input>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col-4">Test</div>
            </div>
            <div>
                <h4 className="me-3 wd-assignments-section-title border border-1 border-bottom-0">Assignments</h4>
                <div className="list-group">
                    {courseAssignments.map((assignment) => (
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item wd-assignment-list-item me-3">
                            {assignment.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Assignments;