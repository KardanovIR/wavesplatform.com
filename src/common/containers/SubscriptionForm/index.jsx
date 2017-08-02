// import React, { Component } from 'react';

import SubscriptionForm from '../../components/SubscriptionForm';


import { withEmailValidation } from './validation'; 


export default withEmailValidation(SubscriptionForm);