import React, { useState, useEffect } from 'react';

function CourseDetails() {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch dummy course details (replace with actual API call)
    const dummyCourse = {
      name: 'Introduction to React',
      instructor: 'John Doe',
      description: 'Learn the basics of React programming.',
      materials: ['Lecture slides', 'Code examples'],
    };

    setCourse(dummyCourse);
  }, []);

  return (
    <div className="container mt-5 border rounded p-4">
      <h2 className="text-danger">Course Details</h2>
      {course && (
        <div>
          <h3>{course.name}</h3>
          <p>Instructor: {course.instructor}</p>
          <p>Description: {course.description}</p>
          <p>Materials: {course.materials.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
