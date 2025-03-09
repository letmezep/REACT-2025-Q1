import BaseButton from '../ui/BaseButton';

const ErrorButton = () => {
  return (
    <BaseButton
      variant="error"
      onClick={() => console.log('You clicked on the Error Button')}
    >
      Click for Test Error
    </BaseButton>
  );
};

export default ErrorButton;
