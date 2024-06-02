import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
  return (
    <div>
      <ClipLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{ width: '100px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
