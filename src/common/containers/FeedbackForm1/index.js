// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import { compose } from 'ramda';



import { connect } from 'react-redux';

import {
    submit,
    // showErrors,
    messageChange,
    reasonChange,
    emailChange
} from './actions';

import View from 'src/common/components/FeedbackForm';



export default connect(
    ({ feedbackForm }) => feedbackForm,
    {
        onSubmit: submit,
    }
)(View);