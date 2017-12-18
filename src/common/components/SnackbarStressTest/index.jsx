import React from 'react';

import View from './View';
import { withLocalStorage } from 'src/public/hoc/localStorage';

const EnhancedSnackbar = withLocalStorage('snackbarStressTest')(
  ({ onLocalStorageUpdate, initialValue, ...rest }) => (
    <View
      onClick={() => onLocalStorageUpdate('shown')}
      onClose={() => onLocalStorageUpdate('shown')}
      show={initialValue !== 'shown'}
    />
  )
);

export default EnhancedSnackbar;
