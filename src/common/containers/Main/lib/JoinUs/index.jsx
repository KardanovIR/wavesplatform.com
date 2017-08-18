import React from 'react';


import BlockQuote from 'src/common/components/BlockQuote';
import Article from 'src/common/components/Article';
import Link from 'src/common/components/Link';
import Icon from 'src/common/components/Icon';
import Button from 'src/common/components/Button';
import { Row, Col } from 'src/common/components/Grid';


import injectSheet from 'react-jss';
import styles from './styles';
import flexCentered from 'src/common/styles/flexCentered';


import links from './links';


const socialButtonStyles = theme => ({
    button: {
        ...flexCentered,
        float: 'left',
        width: 40,
        height: 40,
        padding: 0,
        marginRight: theme.spacing.unit * 2,
        borderRadius: '50%'
    },
})

const SocialButton = injectSheet(socialButtonStyles)(
    ({ href, name, classes }) => (
        <Button href={href} target="_blank" className={classes.button}>
            <Icon name={name} size={18} color="gray-0" />
        </Button>
    )
)


const MainScreen = ({ classes }) => (
    <Row className={classes.root}>
        <Col xs={12} sm={6} smOffset={1} className={classes.article}>
            <Article
                title="Join the Waves Community"
                text="Waves brings together blockchain enthusiasts, project founders from all sorts of sectors, traders, investors, and anyone who is interested in staying on the cutting edge of the crypto-world."
            />
            <div>
                { links.map(link => <SocialButton key={`social_${link.name}`} { ...link } />) }
            </div>
        </Col>
        <Col xs={12} sm={4} smOffset={1}>
            <BlockQuote>
                Read the latest news and articles, and find out all about events happening on the Waves Platform, with our community-centered <Link target="_blank" href="https://wavescommunity.com">wavescommunity.com</Link>
            </BlockQuote>
        </Col>
    </Row>

);


export default injectSheet(styles)(MainScreen);