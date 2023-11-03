import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './ModuleList.css';
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";


function ModuleList() {
    const { courseId } = useParams();
    // const [modules, setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Module Description",
    //     course: courseId,
    // })

    // const addModule = (module) => {
    //     setModules([...modules, { ...module, _id: new Date().getTime().toString() }])
    // }

    // const deleteModule = (moduleId) => {
    //     setModules(modules.filter((module) => module._id !== moduleId))
    // }

    // const updateModule = () => {
    //     setModules(
    //         modules.map((m) => {
    //             if (m._id === module._id) {
    //                 return module;
    //             } else {
    //                 return m;
    //             }
    //         })
    //     )
    // }
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            <li className="list-group-item d-flex flex-column">
                <div className="container-fluid">
                    <input value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} className="form-control my-2" />
                    <textarea value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} className="form-control my-2" />
                    <div>
                        <button onClick={() => dispatch(updateModule(module))} className="btn btn-warning me-2">Update</button>
                        <button className="btn btn-success my-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                    </div>
                </div>
            </li>
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item wd-module-list-item rounded-0 mb-5 border-1">
                            <button onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger float-end">
                                Delete
                            </button>
                            <button onClick={() => dispatch(setModule(module))} className="btn btn-warning float-end me-2">
                                Edit
                            </button>
                            <div>
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </div>

                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;