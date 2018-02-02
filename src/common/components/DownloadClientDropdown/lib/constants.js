import url from 'src/common/utils/url';

export const HANDLERS = {
  Windows: 'onWindowsClick',
  Mac: 'onMacClick',
  Linux: 'onLinuxClick',
};

export const OPTIONS = [
  { value: 'initial', label: 'cta.getClient' },
  // {
  //   value: 'Windows',
  //   label: 'cta.getClient.windows',
  //   link: 'https://s3.ca-central-1.amazonaws.com/wavesdb.com/WavesClient-1.0.0-beta.10-win.zip',
  //   handler: HANDLERS.Windows,
  // },
  {
    value: 'Mac',
    label: 'cta.getClient.mac',
    link: `${url('file')}WavesClient-1.0.0-beta.10-mac.dmg`,
    handler: HANDLERS.Mac,
  },
  {
    value: 'Linux',
    label: 'cta.getClient.linux',
    link: `${url('file')}WavesClient-1.0.0-beta.10-linux.deb`,
    handler: HANDLERS.Linux,
  },
];
