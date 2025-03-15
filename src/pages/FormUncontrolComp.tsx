import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import * as yup from 'yup';
import schema from '../utils/schema';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

const FormUncontrolComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  const validateForm = async () => {
    const formData = {
      name: nameRef.current?.value ?? '',
      age: ageRef.current?.value ? Number(ageRef.current.value) : 0,
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      confirmPassword: confirmPasswordRef.current?.value ?? '',
      gender: genderRef.current?.value ?? '',
      country: countryRef.current?.value ?? '',
      terms: termsRef.current?.checked ?? false,
      file: imagePreview ?? '',
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      setIsValid(true);
      setError(null);
    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        setIsValid(false);
        setError(validationErrors.errors.join('\n'));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const file = fileRef.current?.files?.[0];

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError('Only PNG and JPEG images are allowed.');
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError('File size should be less than 2MB.');
        return;
      }
    }

    const fileBase64 = file ? await convertToBase64(file) : null;

    const formData = {
      name: nameRef.current?.value ?? '',
      age: nameRef.current?.value ? Number(nameRef.current.value) : 0,
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      confirmPassword: confirmPasswordRef.current?.value ?? '',
      gender: genderRef.current?.value ?? '',
      country: countryRef.current?.value ?? '',
      terms: termsRef.current?.checked ?? false,
      file: fileBase64 ?? '',
    };

    try {
      await schema.validate(formData, { abortEarly: false });

      dispatch(submitForm(formData));

      console.log('Form Data:', formData);

      setError(null);
      navigate('/');
    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        setError(validationErrors.errors.join('\n'));
      }
    }
  };

  const handleFileChange = async () => {
    const file = fileRef.current?.files?.[0];

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError('Only PNG and JPEG images are allowed.');
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError('File size should be less than 2MB.');
        return;
      }

      const base64 = await convertToBase64(file);
      setImagePreview(base64);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} onChange={validateForm}>
        <h1>Form created using uncontrolled components approach</h1>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="number" ref={ageRef} placeholder="age" />
        <input type="email" ref={emailRef} placeholder="e-mail" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="confirm password"
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <h3>Gender</h3>
        <select ref={genderRef}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          type="file"
          ref={fileRef}
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          placeholder="upload image"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: 100, height: 100, marginTop: 10 }}
          />
        )}
        <input
          type="text"
          list="country"
          ref={countryRef}
          placeholder="country"
        />
        <datalist id="country">
          <option value="Poland"></option>
          <option value="France"></option>
          <option value="Germany"></option>
          <option value="Spain"></option>
          <option value="Portugal"></option>
          <option value="Albania"></option>
          <option value="Estonia"></option>
          <option value="Russia"></option>
          <option value="Australia"></option>
          <option value="Finland"></option>
          <option value="Canada"></option>
        </datalist>

        <label>
          <input type="checkbox" ref={termsRef} />
          Accept Terms and Conditions
        </label>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormUncontrolComp;

// import React, { useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { submitForm } from '../store/slices/formSlice';
// import * as yup from 'yup';
// import schema from '../utils/schema';

// const MAX_FILE_SIZE = 2 * 1024 * 1024;
// const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

// const FormUncontrolComp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const confirmPasswordRef = useRef<HTMLInputElement>(null);
//   const genderRef = useRef<HTMLSelectElement>(null);
//   const countryRef = useRef<HTMLInputElement>(null);
//   const fileRef = useRef<HTMLInputElement>(null);
//   const termsRef = useRef<HTMLInputElement>(null);

//   const [error, setError] = useState<string | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [isValid, setIsValid] = useState<boolean>(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const file = fileRef.current?.files?.[0];

//     if (file) {
//       if (!ALLOWED_TYPES.includes(file.type)) {
//         setError('Only PNG and JPEG images are allowed.');
//         return;
//       }
//       if (file.size > MAX_FILE_SIZE) {
//         setError('File size should be less than 2MB.');
//         return;
//       }
//     }

//     const fileBase64 = file ? await convertToBase64(file) : null;

//     const formData = {
//       name: nameRef.current?.value ?? '',
//       age: ageRef.current?.value ? Number(ageRef.current.value) : 0,
//       email: emailRef.current?.value ?? '',
//       password: passwordRef.current?.value ?? '',
//       confirmPassword: confirmPasswordRef.current?.value ?? '',
//       gender: genderRef.current?.value ?? '',
//       country: countryRef.current?.value ?? '',
//       terms: termsRef.current?.checked ?? false,
//       file: fileBase64 ?? '',
//     };

//     try {
//       await schema.validate(formData, { abortEarly: false });

//       dispatch(submitForm(formData));

//       console.log('Form Data:', formData); // remove it

//       setError(null);
//       navigate('/');
//     } catch (validationErrors) {
//       if (validationErrors instanceof yup.ValidationError) {
//         setError(validationErrors.errors.join('\n'));
//       }
//     }
//   };

//   const handleFileChange = async () => {
//     const file = fileRef.current?.files?.[0];

//     if (file) {
//       if (!ALLOWED_TYPES.includes(file.type)) {
//         setError('Only PNG and JPEG images are allowed.');
//         return;
//       }
//       if (file.size > MAX_FILE_SIZE) {
//         setError('File size should be less than 2MB.');
//         return;
//       }

//       const base64 = await convertToBase64(file);
//       setImagePreview(base64);
//     }
//   };

//   const convertToBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result as string);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h1>Form created using uncontrolled components approach</h1>
//         <input type="text" ref={nameRef} placeholder="name" />
//         <input type="number" ref={ageRef} placeholder="age" />
//         <input type="email" ref={emailRef} placeholder="e-mail" />
//         <input type="password" ref={passwordRef} placeholder="password" />
//         <input
//           type="password"
//           ref={confirmPasswordRef}
//           placeholder="confirm password"
//         />

//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <h3>Gender</h3>
//         <select ref={genderRef}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>

//         <input
//           type="file"
//           ref={fileRef}
//           accept="image/png, image/jpeg"
//           onChange={handleFileChange}
//           placeholder="upload image"
//         />
//         {imagePreview && (
//           <img
//             src={imagePreview}
//             alt="Preview"
//             style={{ width: 100, height: 100, marginTop: 10 }}
//           />
//         )}
//         <input
//           type="text"
//           list="country"
//           ref={countryRef}
//           placeholder="country"
//         />
//         <datalist id="country">
//           <option value="Poland"></option>
//           <option value="France"></option>
//           <option value="Germany"></option>
//           <option value="Spain"></option>
//           <option value="Portugal"></option>
//           <option value="Albania"></option>
//           <option value="Estonia"></option>
//           <option value="Russia"></option>
//           <option value="Australia"></option>
//           <option value="Finland"></option>
//           <option value="Canada"></option>
//         </datalist>

//         <label>
//           <input type="checkbox" ref={termsRef} />
//           Accept Terms and Conditions
//         </label>

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default FormUncontrolComp;
