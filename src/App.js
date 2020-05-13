import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Searchbar } from './components/layout/Searchbar';
import { Logs } from './components/logs/Logs';
import { AddButton } from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddWorkerModal from './components/workers/AddWorkerModal';
import WorkerListModal from './components/workers/WorkerListModal';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddWorkerModal />
        <WorkerListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
