import React from 'react';

import Panel from 'src/common/components/Panel';
import Typography from 'src/common/components/Typography';
import List from 'src/common/components/List';
import Divider from 'src/common/components/Divider';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import Icon from 'src/common/components/Icon';



import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';


import { FormattedMessage } from 'react-intl';



const Vacancy = ({
    title,
    location,
    blocks,
    classes,
    onSubmitResumeClick,
    expanded,
    onToggle
}) => (
        <Panel className={cn(classes.wrapper, { [classes.collapsed]: !expanded })}>

            <div className={classes.clickable} onClick={onToggle}>
                <div className={classes.arrow} />
            </div>

            <Typography type="display1" className={classes.title}>
                {title}
            </Typography>
            <Typography type="body" noMargin className={classes.location}>
                <Icon name="mapMarker" size={15} />
                <span className={classes.locationText}>
                    {location}
                </span>
            </Typography>

            <div className={classes.content}>
                <Margin />

                <Divider />

                {blocks.map((block, index) => (
                    <div key={`vacancy_block_${index}`}>
                        <Margin top={2} bottom={2}>
                            <Typography type="body" className={classes.subtitle}>{block.title}</Typography>
                            <List items={block.elements} />
                        </Margin>
                        <Divider />
                    </div>
                ))}

                <Margin />

                <Button
                    onClick={onSubmitResumeClick}
                    href={`mailto:hr@wavesplatform.com?subject=${title}`}
                >
                    <FormattedMessage
                        id="cta.resume"
                        defaultMessage="Submit a resume"
                    />
                </Button>
            </div>

        </Panel>
    )



export default injectSheet(styles)(Vacancy);