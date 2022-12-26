import React, { useState } from 'react';
import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Table from '../components/Table/Table';
import Button from '../components/Button';
import Filter from '../components/FilterOptions';
import Checkbox from '../components/Checkbox';
import data from '../data/data.json';
import statusData from '../data/status.json';

// const options = ['All', 'Bangalore', 'Etawah', 'Mainpuri'];
const statusList = ['All', 'Sell', 'Buy', 'Rent', 'Lease'];

export default function ClientList() {
  // const [selectedOption, setSelectedOption] = useState('All');
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

  const handleChange = (event) => {
    console.log(event.target.checked);
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
        <Button buttonText="Filter" className="bg-white text-blue px-8 py-1 hover:bg-lightgray" />
      </div>
      <Table data={filteredData} handleChange={handleChange} />
    </Container>
  );
}
