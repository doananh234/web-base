export default theme => ({
  background: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'background-color': theme.loadingBackgroundColor,
  },
  spinner: {
    width: '50px',
    height: '50px',
    position: 'relative',
  },

  doubleBounce1: {
    width: '100%',
    height: '100%',
    'border-radius': '50%',
    'background-color': theme.primaryColor,
    opacity: '0.6',
    position: 'absolute',
    top: '0',
    left: '0',
    animation: 'sk-bounce 2.0s infinite ease-in-out',
  },

  doubleBounce2: {
    width: '100%',
    height: '100%',
    'border-radius': '50%',
    'background-color': theme.primaryColor,
    opacity: '0.6',
    position: 'absolute',
    top: '0',
    left: '0',
    animation: 'sk-bounce 2.0s infinite ease-in-out',
    'animation-delay': '-1.0s',
  },

  '@keyframes sk-bounce': {
    '0%': {
      transform: 'scale(0.0)',
    },
    '50%': {
      transform: 'scale(1.0)',
    },
    '100%': {
      transform: 'scale(0.0)',
    },
  },
});
