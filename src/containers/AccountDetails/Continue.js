import * as PropTypes from 'prop-types';
import React from 'react';
import Button from '../../components/Button';

const Continue = (props) => {
    const onClick = () => {
        props.history.push('/dashboard');
    };

    return (
        <Button
            className="btn button-primary"
            disabled={false}
            loading={false}
            type="button"
            value="Continue"
            onClick={onClick}
        />
    );
};

Continue.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Continue;
