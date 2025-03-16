import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MainPage: React.FC = () => {
  const forms = useSelector((state: RootState) => state.createFormSlice.forms);

  return (
    <>
      <div className="main-container">
        {forms.length > 0 &&
          forms.map((form, index) => (
            <div
              key={index}
              className={`card ${index === forms.length - 1 ? 'highlight' : ''}`}
            >
              <p>
                <strong>Name:</strong> {form.name}
              </p>
              <p>
                <strong>Age:</strong> {form.age}
              </p>
              <p>
                <strong>Gender:</strong> {form.gender}
              </p>
              <p>
                <strong>Email:</strong> {form.email}
              </p>
              <p>
                <strong>Country:</strong> {form.country}
              </p>
              <p>
                <strong>Password:</strong> {form.password}
              </p>
              <p>
                <strong>Confirm Password:</strong> {form.confirmPassword}
              </p>

              {form.file?.startsWith('data:image') && (
                <img
                  src={form.file}
                  alt="Uploaded"
                  style={{ width: 150, height: 150, borderRadius: '10px' }}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default MainPage;
