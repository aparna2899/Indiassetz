import React, { useState } from 'react';
import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Table from '../components/Table/Table';
import Button from '../components/Button';
import Filter from '../components/FilterOptions';
import Checkbox from '../components/Checkbox';
import data from '../data/data.json';

// const options = ['All', 'Sell', 'Buy', 'Rent', 'Lease'];
const options = ['All', 'Bangalore', 'Etawah', 'Mainpuri'];

export default function ClientList() {
  const [selectedOption, setSelectedOption] = useState('All');
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (event) => {
    console.log(event.target.checked);
  };
  const handleFilterChange = (option) => {
    setSelectedOption(option);
    if (option === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.Branch === option));
    }
  };

  return (
    <Container pathToImg="profilepic.png" buttonText="Add Client">
      <HeadingBox heading="Clients" description={`Total ${data.length} "All" Records`} />
      <Filter
        options={options}
        selectedOption={selectedOption}
        handleFilterChange={handleFilterChange}
      />
      <div className="text-right mb-4">
        <Button buttonText="Filter" className="bg-white text-blue px-8 py-1" />
      </div>
      <Table data={filteredData} handleChange={handleChange} />
    </Container>
  );
}
