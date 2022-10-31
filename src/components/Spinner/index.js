import React from 'react';
import ReactDOM from 'react-dom';
import './spinner.css';
import { connect } from 'react-redux';

function Spinner({ isLoading }) {
  return isLoading ? (
    <>
      <div className="background-grey">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="spinner-loading">Đang tải ...</p>
      </div>
    </>
  ) : (
    ''
  );
}
const mapStateToProps = (state) => {
  return { isLoading: state.spinner.isLoading };
};
export default connect(mapStateToProps, {})(Spinner);
