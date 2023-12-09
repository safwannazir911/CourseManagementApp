import React, { useState } from 'react';

function EnrollCourse() {
  const [formData, setFormData] = useState({
    courseId: '',
    email: '',
    rollNo: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnroll = (e) => {
    e.preventDefault();

    // Implement enrollment logic (e.g., make API call to enroll the student)
    console.log('Enrolling in the course:', formData.courseId, 'Email:', formData.email, 'Roll No:', formData.rollNo);

    // Reset the form after enrollment
    setFormData({
      courseId: '',
      email: '',
      rollNo: '',
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-danger">Enroll in Course</h2>
      <form onSubmit={handleEnroll}>
        <div className="mb-3">
          <label htmlFor="courseId" className="form-label">
            Course ID:
            <input
              type="text"
              className="form-control"
              id="courseId"
              name="courseId"
              value={formData.courseId}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="rollNo" className="form-label">
            Roll No:
            <input
              type="text"
              className="form-control"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Enroll</button>
      </form>
    </div>
  );
}

export default EnrollCourse;
