import React, { Component } from 'react';

import Vacancy from './lib/Vacancy';
import Margin from 'src/common/components/Margin';

class Vacancies extends Component {
  state = {
    expandedIndex: null,
  };

  handleToggle = index => {
    this.setState(oldState => ({
      expandedIndex: index === oldState.expandedIndex ? null : index,
    }));
  };

  render() {
    const { vacancies } = this.props;
    return (
      <Margin>
        {vacancies.map((v, i) => (
          <Margin key={`vacancy_${i}`} bottom={1}>
            <Vacancy
              expanded={this.state.expandedIndex === i}
              onToggle={() => this.handleToggle(i)}
              {...v}
            />
          </Margin>
        ))}
      </Margin>
    );
  }
}

export default Vacancies;
