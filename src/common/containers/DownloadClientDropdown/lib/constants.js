import { fileUrl } from 'src/common/utils/url';

export const HANDLERS = {
  Windows: 'onWindowsClick',
  Mac: 'onMacClick',
  Linux: 'onLinuxClick',
};

export const OPTIONS = [
  { value: 'initial', label: 'cta.getClient' },
  {
    value: 'Windows',
    label: 'cta.getClient.windows',
    link: fileUrl('WavesClient-1.0.0-beta.X-win.zip'),
    handler: HANDLERS.Windows,
  },
  {
    value: 'Mac',
    label: 'cta.getClient.mac',
    link: fileUrl('WavesClient-1.0.0-beta.X-mac.dmg'),
    handler: HANDLERS.Mac,
  },
  {
    value: 'Linux',
    label: 'cta.getClient.linux',
    link: fileUrl('WavesClient-1.0.0-beta.X-linux.deb'),
    handler: HANDLERS.Linux,
  },
];
