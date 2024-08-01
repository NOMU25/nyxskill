import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCourse from './pages/CreateCourses';
import ShowCourse from './pages/ShowCourse';
import EditCourse from './pages/EditCourse';
import DeleteCourse from './pages/DeleteCourse';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses/create' element={<CreateCourse />} />
      <Route path='/courses/details/:id' element={<ShowCourse />} />
      <Route path='/courses/edit/:id' element={<EditCourse />} />
      <Route path='/courses/delete/:id' element={<DeleteCourse />} />
    </Routes>
  );
};

export default App;
