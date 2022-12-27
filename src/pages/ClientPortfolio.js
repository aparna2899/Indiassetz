import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Button from '../components/Button';
import Input from '../components/Input';
import InputGroup from '../components/InputGroup';
import TotalProperties from '../components/TotalProperties';
import data from '../../src/data/propertyDetail.json';
import PropertyDetail from '../components/ClientProperty';
import { Link } from 'react-router-dom';

export default function ClientPortfolio() {
  return (
    <Container pathToImg="client-portfolio-profilepic.png" buttonText="Add Order">
      <HeadingBox heading="Karthik’s Portfolio">
        <Link to="/client-order-list">
          <Button
            type="button"
            className="text-blue bg-transparent border-2 border-blue w-40 mx-5 py-1 justify-center shadow-none hover:bg-lightgray"
            buttonText="View Orders"></Button>
        </Link>
      </HeadingBox>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6">
        <div className="flex">
          <div className="flex-1">
            <InputGroup>
              <Input label="Client Id" value="QWERT123-XYZ" />
              <Input label="Client Name" value="Karthik J" />
            </InputGroup>
            <InputGroup>
              <Input label="Subscription Type" value="Gold" />
              <Input label="Contact" value="+91 9999999999" />
            </InputGroup>
          </div>
          <div className="flex items-center justify-center text-center bg-slate-100/50 border border-lightgray px-8 ml-10  my-5 rounded-md">
            <TotalProperties numberOfProperty="02" className="flex-col-reverse" />
          </div>
        </div>
        <InputGroup>
          <Input label="Email" type="email" value="xyz@gmail.com" />
          <Input label="PRM" value="-" />
        </InputGroup>
      </div>
      <div className="text-right mb-4">
        <Button
          buttonText="View all properties"
          className="bg-white text-blue text-sm px-4 hover:bg-lightgray"
        />
      </div>
      {data.map((property, index) => (
        <PropertyDetail key={index} data={property} />
      ))}
    </Container>
  );
}
