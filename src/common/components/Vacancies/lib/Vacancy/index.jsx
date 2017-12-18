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
  onToggle,
}) => (
  <Panel className={cn(classes.wrapper, { [classes.collapsed]: !expanded })}>
    <div className={classes.clickable} onClick={onToggle}>
      <div className={classes.titleWrapper}>
        <div className={classes.arrow} />

        <Typography type="display1" className={classes.title}>
          {title}
        </Typography>
        <Typography type="body" noMargin>
          <Icon name="mapMarker" size={15} color="gray-400" />
          <span className={classes.locationText}>{location}</span>
        </Typography>
      </div>
    </div>

    <div className={classes.content}>
      <Divider />

      {blocks.map((block, index) => (
        <div key={`vacancy_block_${index}`}>
          <Margin top={2} bottom={2}>
            <Typography type="body" className={classes.subtitle}>
              {block.title}
            </Typography>
            <List items={block.elements} />
          </Margin>
          <Divider />
        </div>
      ))}

      <Margin top={3} bottom={1}>
        <Button
          onClick={onSubmitResumeClick}
          href={`mailto:hr@wavesplatform.com?subject=${title}`}
        >
          <FormattedMessage id="cta.resume"  />
        </Button>
      </Margin>
    </div>
  </Panel>
);

export default injectSheet(styles)(Vacancy);
