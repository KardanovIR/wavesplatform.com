import React from 'react';

import Vacancies from 'src/common/components/Vacancies';
import vacancies from './vacancies.json';

const VacanciesContainer = () => <Vacancies vacancies={vacancies} />;

export default VacanciesContainer;
