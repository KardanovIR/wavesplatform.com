import { connect } from 'react-redux';
import View from './View';

export default connect(s => ({ tokensIssued: s.dexData.dexAssets }))(View);
