import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ModuleList.css';
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./modulesReducer";
import * as client from "./client";


function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };


    return (
        <ul className="list-group">
            <li className="list-group-item d-flex flex-column">
                <div className="container-fluid">
                    <input value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} className="form-control my-2" />
                    <textarea value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} className="form-control my-2" />
                    <div>
                        <button onClick={() => dispatch(updateModule(module))} className="btn btn-warning me-2">Update</button>
                        <button className="btn btn-success my-2" onClick={handleAddModule}>Add</button>
                    </div>
                </div>
            </li>
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item wd-module-list-item rounded-0 mb-5 border-1">
                            <button onClick={() => handleDeleteModule(module._id)} className="btn btn-danger float-end">
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