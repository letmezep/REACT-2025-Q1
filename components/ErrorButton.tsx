import { useState } from 'react';
import BaseButton from './ui/BaseButton';

const ErrorButton = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('Testing error');
  }

  return (
    <BaseButton variant="error" onClick={() => setThrowError(true)}>
      Click for Test Error
    </BaseButton>
  );
};

export default ErrorButton;


// import { useState } from 'react';
// import BaseButton from './ui/BaseButton';

// const ErrorButton = () => {
//   const [throwError, setThrowError] = useState(false);

//     if (throwError) {
//       throw new Error('Testing error');
//     }
//   return (
//     <BaseButton variant="error" onClick={() => setThrowError(!throwError)}>
//       Click for Test Error
//     </BaseButton>
//   );
// };

// export default ErrorButton;

// import BaseButton from '../ui/BaseButton';
// import { useState } from 'react';

// const ErrorButton = () => {
//   const [throwError, setThrowError] = useState(false);

//   if (throwError) {
//     throw new Error('Testing error');
//   }

//   return (
//     <BaseButton variant="error" onClick={() => setThrowError(!throwError)}>
//       Click for Test Error
//     </BaseButton>
//   );
// };

// export default ErrorButton;
