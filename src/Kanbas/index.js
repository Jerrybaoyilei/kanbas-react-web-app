import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./Users/signin"
import Account from "./Users/account"
import UserTable from "./Users/table";
import Signup from "./Users/signup";


function Kanbas() {
    const [courses, setCourses] = useState([]);
    const BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
    const URL = `${BASE_URL}/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);
    const [course, setCourse] = useState({
        name: "New course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });

    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses,]);
    }

    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter(
            (c) => c._id !== course._id));
    };

    const updateCourse = async (course) => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => (c._id === course._id ? course : c))
        );
        setCourse({ name: "" });
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />}
                        />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;