import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MainPage: React.FC = () => {
  const formData = useSelector(
    (state: RootState) => state.createFormSlice.forms.slice(-1)[0]
  );

  return (
    <>
      <div className="main-container">
        {formData?.file && (
          <div>
            <h3>Uploaded Image:</h3>
            <img
              src={formData.file}
              alt="Uploaded"
              style={{ width: 150, height: 150, borderRadius: '10px' }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
