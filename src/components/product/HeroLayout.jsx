import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Container, Box } from '@mui/material';

const HeroMain = styled(Box)({
  color: 'white',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '80vh',
  minHeight: 500,
  maxHeight: 1300,
});

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundImage: 'url(https://lh5.googleusercontent.com/Lw3SVGgtzNsW5Wy48rJ-SEZwaWOgoa4QXeplKEBoVYQbI4roEQITFJOmjIURytOYyBhzYmyNAPUT56kFNKgzoBoAIsFsNXGe7hA_C_z7lw1g1GhcPrVWdhNOXzxbGMcGILi4DjE3)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function HeroLayout({ children }) {
  return (
    <HeroMain>
      <Container
        sx={{
          mt: 3,
          mb: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background />
      </Container>
    </HeroMain>
  );
}

HeroLayout.propTypes = ({
  children: PropTypes.node,
});

export default HeroLayout;
