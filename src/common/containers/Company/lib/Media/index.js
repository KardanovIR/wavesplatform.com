import { connect } from 'react-redux';

import { contactUsClick, brandingPackageDownload } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onContactUsClick: () => contactUsClick({ page: 'company', source: 'media' }),
    onBrandingPackageClick: () => brandingPackageDownload({ page: 'company', source: 'media' }),
})(View);