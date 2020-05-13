import React, { useState, useEffect } from 'react';
import WorkerItem from './WorkerItem';

const WorkerListModal = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWorkers = async () => {
    setLoading(true);
    const response = await fetch('/workers');
    const data = await response.json();

    setWorkers(data);
    setLoading(false);
  };

  useEffect(() => {
    getWorkers();
    // eslint-disable-next-line
  }, [])

  return (
    <div id="worker-list-modal" className="modal">
      <div className="modal-content">
        <h4>Worker List</h4>
        <ul className="collection">
          {!loading &&
            workers.map(worker => (
              <WorkerItem worker={worker} key={worker.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkerListModal;
