import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Reference extends Component {
  render() {
    const {render, referenceData} = this.props;
    return (
      <>
        {render({
          referenceData
        })}
      </>
    )
  }
}

Reference.propTypes = {
  referenceBy: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  referenceKey: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Reference)n