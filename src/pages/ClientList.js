import Container from '../components/Container';
import Table from '../components/Table/Table';
import data from '../data/data.json';

export default function ClientList() {
  const handleChange = (event) => {
    console.log(event.target.checked);
  };
  return (
    <Container>
      <Table data={data} handleChange={handleChange} />
    </Container>
  );
}
