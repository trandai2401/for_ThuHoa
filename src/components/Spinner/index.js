import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './spinner.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
function useSpinner(props) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    ReactDOM.createPortal(
      <>
        <div className="background-grey">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <p className="spinner-loading">Đang tải ...</p>
        </div>
      </>,
      document.getElementById('modal-root'),
    );
  });
  return [isLoading, setIsLoading];
}
const mapStateToProps = (state) => {
  return { isLoading: state.spinner.state };
};
export default connect(mapStateToProps, {})(useSpinner);
