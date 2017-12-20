import { defineMessages } from 'react-intl';

const messages = defineMessages({
  option1: {
    id: 'mining.revenue.calc.option1',
    defaultMessage: '1 week',
  },
  option2: {
    id: 'mining.revenue.calc.option2',
    defaultMessage: '1 month',
  },
  option3: {
    id: 'mining.revenue.calc.option3',
    defaultMessage: '6 months',
  },
  option4: {
    id: 'mining.revenue.calc.option4',
    defaultMessage: '1 year',
  },
  option5: {
    id: 'mining.revenue.calc.option5',
    defaultMessage: '3 years',
  },
  option6: {
    id: 'mining.revenue.calc.option6',
    defaultMessage: '5 years',
  },
});

export default intl => [
  {
    name: intl.formatMessage(messages.option1),
    value: '1w',
  },
  {
    name: intl.formatMessage(messages.option2),
    value: '1m',
  },
  {
    name: intl.formatMessage(messages.option3),
    value: '6m',
  },
  {
    name: intl.formatMessage(messages.option4),
    value: '1y',
  },
  {
    name: intl.formatMessage(messages.option5),
    value: '3y',
  },
  {
    name: intl.formatMessage(messages.option6),
    value: '5y',
  },
];
