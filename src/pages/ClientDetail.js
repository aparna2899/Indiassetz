import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Button from '../components/Button';
import Input from '../components/Input';
import InputGroup from '../components/InputGroup';
import InputGroupHeading from '../components/InputGroupHeading';
import Table from '../components/Table/Table';
import watchlist from '../../src/data/watchlist.json';
import orderstatus from '../../src/data/orderstatus.json';
import Checkbox from '../components/Checkbox';
import TotalProperties from '../components/TotalProperties';
import DoughnutChart from '../components/Chart';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function ClientDetail() {
  return (
    <Container pathToImg="client-detail-profile-pic.png" buttonText="Add Property">
      <HeadingBox heading="Detail">
        <Link to="/client-portfolio">
          <Button
            type="button"
            className="text-white bg-blue w-40 mx-5 py-1 justify-center hover:bg-sky-900"
            buttonText="View Properties"></Button>
        </Link>
        <Link to="/client-order-list">
          <Button
            type="button"
            className="text-blue bg-transparent border-2 border-blue w-40 mx-5 py-1 justify-center shadow-none"
            buttonText="View Orders"></Button>
        </Link>
      </HeadingBox>
      <div className="flex justify-between text-right mb-4">
        <Button buttonText="Cart" className="bg-white text-blue px-8 py-1" />
        <Button buttonText="Edit" className="bg-white text-blue px-8 py-1" />
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6 flex">
        <div className="text-center">
          <div className="w-36">
            <img src="Clientdetail-user.png" className="w-full" />
          </div>
          <TotalProperties numberOfProperty="02" />
          <div>
            <strong className="text-blue text-4xl font-medium">5.3Cr</strong>
            <p className="text-sm text-blue">Net worth</p>
          </div>

          <DoughnutChart />
        </div>
        <div className="flex-1 mx-6">
          <InputGroup>
            <Input label="Client Id" value="QWERT123-XYZ" />
            <Input label="Client Name" value="Karthik J" />
            <Input label="Subscription Type" value="Gold" />
          </InputGroup>
          <InputGroup>
            <Input
              label="Address"
              type="textarea"
              value="12th Floor, C Wing, Mittal Tower, MG Road, Bangalore 
"
            />
            <Input
              label="Special note"
              type="textarea"
              value="Lorem ipsum dolor sit amet, consectetur.. 
"
            />
          </InputGroup>
          <InputGroup>
            <Input label="DOB" value="19.01.1998" />
            <Input label="Contact" value="+91 9999999999" />
            <Input label="Email" type="email" value="xyz@gmail.com" />
          </InputGroup>
          <InputGroup>
            <Input label="Occupation" value="Business" />
            <Input label="Gender" value="Male" />
            <Input label="Pin Code" value="560001" />
          </InputGroup>
          <InputGroup>
            <Input label="City" value="Bangalore" />
            <Input label="State" value="Karnataka" />
            <Input label="Country" value="India" />
          </InputGroup>
        </div>
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6">
        <InputGroupHeading heading="Investor profile" />
        <InputGroup>
          <Input label="Income Range" value="-" disabled="true" />
          <Input label="Budget" value="-" disabled="true" />
          <Input label="Onoarding Branch" value="-" disabled="true" />
        </InputGroup>
        <InputGroup>
          <Input label="Investment in RE" value="-" disabled="true" />
          <Input label="Exposure to RE" value="-" disabled="true" />
          <Input label="Planning to invest" value="-" disabled="true" />
        </InputGroup>
        <InputGroup>
          <Input label="Retain investment(Yrs)" value="-" disabled="true" />
          <Input label="Unique Promo" value="-" disabled="true" />
          <div className="flex-1"></div>
        </InputGroup>
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6">
        <InputGroupHeading heading="Partner Relationship" />
        <InputGroup>
          <Input label="Bank/WMC" value="-" disabled="true" />
          <Input label="Unique Promo Code" value="-" disabled="true" />
          <div className="flex-1"></div>
        </InputGroup>
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6">
        <InputGroupHeading heading="Referral Details" />
        <InputGroup>
          <Input label="Reffered By" value="Enter name" disabled="true" />
          <Input label="Organisation" value="Enter organisation" disabled="true" />
          <Input label="Email" value="Enter email" disabled="true" />
        </InputGroup>
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6">
        <InputGroupHeading heading="Documents" />
        <InputGroup>
          <Input label="eKYC Verification" value="-" disabled="true" />
          <Input label="eKYC Verification Date" value="-" disabled="true" />
          <Input label="Aadhar" value="-" disabled="true" />
        </InputGroup>
        <InputGroup>
          <Input label="PAN" value="-" disabled="true" />
          <div className="text-blue underline my-auto mx-1 flex-1 cursor-pointer">
            + Add Document
          </div>
          <div className="flex-1"></div>
        </InputGroup>
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6 flex">
        <Input type="textarea" value="Summary" disabled="true" className="mx-0 flex-none" />
        <Input type="textarea" value="-" disabled="true" className="mx-0" />
      </div>
      <Card heading="Watchlist" viewall="View all" data={watchlist}>
        <Button
          type="button"
          buttonText="View property"
          className="text-blue bg-transparent border border-lightgray px-2 "
        />
      </Card>
      <Card heading="Order status" viewall="View all" data={orderstatus}>
        <Button
          type="button"
          buttonText="View details"
          className="text-blue bg-transparent border border-lightgray px-2 "
        />
      </Card>
    </Container>
  );
}
