import { SyncLoader } from 'react-spinners';

const LoaderSpinner = () => {
    const loaderContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      };
      

    return (
        <div style={loaderContainerStyle}>
            <SyncLoader 
            color="#808080" 
            speedMultiplier={1} 
            loading={true} />
        </div>
    );
};

export default LoaderSpinner;
