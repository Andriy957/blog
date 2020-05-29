import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const InputCategory = ({
    label, inputProps, error, id,     
}) => (
        <div className="formInputCategory">
          <label htmlFor={id} className="formInputLabelCategory">  
            {label}
          </label>
        <input {...inputProps} id={id} />    
          {error && <span className="formInputErrorCategory">{error}</span>} 
        </div>
    );


InputCategory.propTypes = {                   
    label: PropTypes.string.isRequired,  
    inputProps: PropTypes.instanceOf(Object).isRequired,  
    error: PropTypes.string,
    id: PropTypes.string.isRequired, 
};

InputCategory.defaultProps = { 
    error: '',
}

export default InputCategory;