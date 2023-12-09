import React, { useState, useEffect } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch dummy data (replace with actual API call)
    const dummyData = [
        { id: 1, name: 'Introduction to React', instructor: 'John Doe' },
        { id: 2, name: 'JavaScript Fundamentals', instructor: 'Jane Smith' },
        { id: 3, name: 'Advanced CSS Techniques', instructor: 'Alice Johnson' },
        { id: 4, name: 'Node.js Essentials', instructor: 'Bob Anderson' },
        { id: 5, name: 'Database Design and Management', instructor: 'Eva Williams' }
    ];

    setCourses(dummyData);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-danger">Courses</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li key={course.id} className="list-group-item">
            <a href={"/"} className="text-decoration-none">{course.name}</a> - Instructor: {course.instructor}
            <p className="mb-0">Course ID: 0{course.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
