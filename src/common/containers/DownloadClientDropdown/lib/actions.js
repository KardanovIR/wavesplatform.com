import { HANDLERS } from './constants';
import {
  getElectronWindowsClick,
  getElectronMacClick,
  getElectronLinuxClick,
} from 'src/public/actions';

const handlersMap = {
  [HANDLERS.Windows]: getElectronWindowsClick,
  [HANDLERS.Mac]: getElectronMacClick,
  [HANDLERS.Linux]: getElectronLinuxClick,
};

export const downloadClientChange = logSettings => ({ handler }) =>
  handler ? handlersMap[handler](logSettings) : _ => _;
