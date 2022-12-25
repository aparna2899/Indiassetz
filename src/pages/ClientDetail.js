import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Button from '../components/Button';
import Input from '../components/Input';
import InputGroup from '../components/InputGroup';
import InputGroupHeading from '../components/InputGroupHeading';

export default function ClientDetail() {
  return (
    <Container pathToImg="client-detail-profile-pic.png" buttonText="Add Property">
      <HeadingBox heading="Detail">
        <Button
          type="button"
          className="text-white bg-blue w-40 mx-5 py-1 justify-center hover:bg-sky-900"
          buttonText="View Properties"></Button>
        <Button
          type="button"
          className="text-blue bg-transparent border-2 border-blue w-40 mx-5 py-1 justify-center shadow-none"
          buttonText="View Orders"></Button>
      </HeadingBox>
      <div className="flex justify-between text-right mb-4">
        <Button buttonText="Edit" className="bg-white text-blue px-8 py-1" />
        <Button buttonText="Cart" className="bg-white text-blue px-8 py-1" />
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
        <InputGroupHeading heading="Documents" />
        <InputGroup>
          <Input label="eKYC Verification" value="-" disabled="true" />
          <Input label="eKYC Verification Date" value="-" disabled="true" />
          <Input label="Aadhar" value="-" disabled="true" />
        </InputGroup>
        <InputGroup>
          <Input label="PAN" value="-" disabled="true" />
          <Input label="Add document" type="file" value="" disabled="" />
          <div className="flex-1"></div>
        </InputGroup>
      </div>
    </Container>
  );
}
