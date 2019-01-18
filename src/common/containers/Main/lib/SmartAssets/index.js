import React from 'react';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';

import {Row, Col} from 'src/common/components/Grid';
import Button from 'src/common/components/Button';

import {FormattedMessage, FormattedPlural} from 'react-intl';

import styles from './styles';
import injectSheet from "react-jss";
import ContentContainer from 'src/common/components/ContentContainer';


class SmartAssetsView extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.bgAssets}>
                <ContentContainer>
                    <Row>
                        <Col xs={11} sm={8}>
                            <Typography type="display3" className={classes.smartAssetTitle}>
                                <FormattedMessage id="home.smartAssets.title.text"
                                                  defaultMessage="Smart Assets feature is activated on Waves MainNet!"
                                />
                            </Typography>
                            <Margin bottom={3}/>
                            <Button target="_blank"
                                    href='https://blog.wavesplatform.com/smart-assets-and-smart-account-trading-features-released-on-mainnet-c295ee58bb13'
                                    secondary>
                                <FormattedMessage id="home.smartAssets.button.learn"
                                                  defaultMessage="Learn more"
                                />
                            </Button>
                            <Margin bottom={4}/>
                        </Col>
                    </Row>
                </ContentContainer>
            </div>
        );
    }
}

export default injectSheet(styles)(SmartAssetsView);

