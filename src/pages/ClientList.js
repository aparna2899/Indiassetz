import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Table from '../components/Table/Table';
import Button from '../components/Button';
import data from '../data/data.json';

export default function ClientList() {
  const handleChange = (event) => {
    console.log(event.target.checked);
  };
  return (
    <Container>
      <HeadingBox heading="Clients" description={`Total ${data.length} "All" Records`} />
      <Table data={data} handleChange={handleChange} />
    </Container>
  );
}
