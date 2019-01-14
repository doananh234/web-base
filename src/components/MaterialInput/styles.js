export default () => ({
  '.ant-form-item': {
    // Material input
    position: 'relative',
    '& .ant-form-item-required:before': {
      display: 'none',
    },
    '& .ant-form-item-label': {
      position: 'absolute',
      'z-index': '99',
      padding: '4px 11px',
      cursor: 'text',
      '& label': {
        cursor: 'text',
      },
    },
    '& input': {
      'border-radius': '0',
      'border-top': 'none',
      'border-left': 'none',
      'border-right': 'none',
      outline: 'none',
      '&:hover': {
        'border-bottom-width': '2px',
        'border-color': theme.secondaryColor,
        transition: 'border-color 200ms ease-in-out',
      },
      '&:focus': {
        'box-shadow': 'none',
        'border-bottom-width': '2px',
        'border-color': `${theme.primaryColor} !important`,
      },
    },
  },
});
