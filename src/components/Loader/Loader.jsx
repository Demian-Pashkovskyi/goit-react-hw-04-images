import { Box } from '../Styled/Box';
import { Grid } from 'react-loader-spinner';

export const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="fixed"
    top="0"
    left="0"
    width="100vw"
    height="100vh"
    bg="#0000005e"
  >
    <Grid
      height="160"
      width="160"
      radius="9"
      color="#61dafb"
      ariaLabel="three-dots-loading"
    />
  </Box>
);

// import { ThreeDots } from 'react-loader-spinner';

// export const Loader = () => {
//   return <ThreeDots color={'#3f51b5'} width="100" ariaLabel="loading" />;
// };