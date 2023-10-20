import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import './index.css';
import '../../index.css'

function CourseTopNavigation() {

    const { courseId, assignmentId } = useParams();

    return (
        <nav aria-label="breadcrumb" className="d-flex align-items-center">
            <RxHamburgerMenu className="m-3 mb-0 wd-link-red" />
            <ol className="breadcrumb m-3 mb-0 ms-0">
                <li className="breadcrumb-item">
                    <Link key={courseId} className='wd-link-red'>
                        {courseId}
                    </Link>
                </li>
                {extractCourseNavTabFromUrl()}
            </ol>
        </nav>
    )
}

// This function will return the specific tab in the course navigation that the user is currently on. (i.e., Home, Modules, Piazza, etc.)
function extractCourseNavTabFromUrl() {
    // Get the current url hash
    const url = window.location.hash;
    // Split the url by "/" to get an array of its segments
    const urlSegments = url.split("/");
    // Find the index of the "Courses" segment
    const coursesIndex = urlSegments.findIndex((segment) => segment === "Courses");
    // First check we are in the courses section (i.e., URL has courses in it)
    if (coursesIndex != 1) {
        // There are 3 segments after Courses in URL: courseId, Courses tab name, specific item in tab
        if (coursesIndex + 3 < urlSegments.length) {
            const tabName = urlSegments[coursesIndex + 2];
            const specificItem = urlSegments[coursesIndex + 3];
            return (
                <>
                    <li className="breadcrumb-item">
                        <Link key={tabName} className='wd-link-red'>
                            {tabName}
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {specificItem}
                    </li>
                </>
            )
        }
        // There are 2 segments after Courses in URL: courseId, Courses tab name
        else if (coursesIndex + 2 < urlSegments.length) {
            const tabName = urlSegments[coursesIndex + 2];
            return (
                <li className="breadcrumb-item active" aria-current="page">
                    {tabName}
                </li>
            )
        }
    }
}

// Handles if the navigation is Assignments, 

export default CourseTopNavigation;