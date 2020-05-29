import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SignupInput = ({
    label, inputProps, error, id,     
}) => (
        <div className="formInput">
          <label htmlFor={id} className="formInput-label">  
            {label}
          </label>
        <input {...inputProps} id={id} />    
          {error && <span className="formInput-error">{error}</span>} 
        </div>
    );


SignupInput.propTypes = {                   
    label: PropTypes.string.isRequired,  
    inputProps: PropTypes.instanceOf(Object).isRequired,  
    error: PropTypes.string,
    id: PropTypes.string.isRequired, 
};

SignupInput.defaultProps = { 
    error: '',
}

export default SignupInput;