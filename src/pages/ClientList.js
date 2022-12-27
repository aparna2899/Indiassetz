import React, { useState } from 'react';
import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Table from '../components/Table/Table';
import Button from '../components/Button';
import Filter from '../components/FilterOptions';
import data from '../data/data.json';
import statusData from '../data/status.json';

const statusList = ['All', 'Sell', 'Buy', 'Rent', 'Lease'];

export default function ClientList() {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedStatus, setSelectedStatus] = useState('All');

  const handleFilterChange = (status) => {
    setSelectedStatus(status);
    if (status === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(statusData[status]);
    }
  };

  return (
    <Container pathToImg="profilepic.png" buttonText="Add Client">
      <HeadingBox heading="Clients" description={`Total ${data.length} "All" Records`} />
      <Filter
        statusList={statusList}
        selectedStatus={selectedStatus}
        handleFilterChange={handleFilterChange}
      />
      <div className="text-right mb-4">
        <Button buttonText="Filter" className="bg-white text-blue px-8 py-1 hover:bg-lightgray">
          <div className="w-4 mx-1">
            <img src="FilterIcon.png" className="w-full" />
          </div>
        </Button>
      </div>
      <Table data={filteredData} />
    </Container>
  );
}
