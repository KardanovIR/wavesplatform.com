import { connect } from 'react-redux';

import { brandingPackageDownload } from 'src/public/actions';

import View from './View';

export default connect(undefined, {
  onBrandingPackageClick: () =>
    brandingPackageDownload({ page: 'company', source: 'media' }),
})(View);
