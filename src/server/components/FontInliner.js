import typeface from 'src/common/theme/typeface';

// typography
import injectSheet from 'react-jss';

// empty React component, only for inlining fonts
const FontInliner = () => null;

export default injectSheet(typeface)(FontInliner);
