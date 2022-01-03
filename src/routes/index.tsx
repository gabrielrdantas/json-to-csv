import React from 'react';
import { Switch, Route } from 'react-router-dom';

import JsonFormatter from '../pages/JsonFormatter';
import ConvertJsonToCsv from '../pages/ConvertJsonToCsv';
import ConvertJsonToPdf from '../pages/ConvertJsonToPdf';
import DiffChecker from '../pages/DiffChecker';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={JsonFormatter} />
      <Route path="/json-to-csv" exact component={ConvertJsonToCsv} />
      <Route path="/json-to-pdf" exact component={ConvertJsonToPdf} />
      <Route path="/json-diff-checker" exact component={DiffChecker} />
    </Switch>
  );
};

export default Routes;
