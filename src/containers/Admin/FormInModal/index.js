import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { togglePopupAction } from '../../../redux/popupStatus/actions';

function FormInModal(props) {
  return (
    <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onCancel={this.handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

FormInModal.propTypes = {};

export default connect(
  (state, props) => ({
    visible: state.popupStatus[props.name]
  }),
  (dispatch, props) => ({
    tooglePopup: () => {
      dispatch(togglePopupAction(props.name));
    }
  })
)(FormInModal);
