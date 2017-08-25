import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

import translations from './translations';

addLocaleData([...en, ...pl]);

const locale = 'pl';

ReactDOM.render(
  <IntlProvider locale={locale} messages={translations[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
