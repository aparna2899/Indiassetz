import Container from '../components/Container';
import HeadingBox from '../components/HeadingBox';
import Button from '../components/Button';
import Input from '../components/Input';
import InputGroup from '../components/InputGroup';

export default function ClientOrderList() {
  return (
    <Container pathToImg="clientorderlist-profilepic.png" buttonText="Add Order">
      <HeadingBox heading="Karthik’s Orders" description="Total 1240 “All” Records" />
      <div className="bg-white px-4 py-4 rounded-3xl mb-6 flex">
        <div className="text-center">
          <div className="w-36">
            <img src="Client.png" className="w-full" />
          </div>
        </div>
        <div className="flex-1 mx-6">
          <InputGroup>
            <Input label="Name" value="Karthik J" disabled="true" />
            <Input label="Client Id" value="QWERT-123" disabled="true" />
            <Input label="Subscription Type" value="Gold" disabled="true" />
          </InputGroup>

          <InputGroup>
            <Input label="Email" type="email" value="xyz@gmail.com" disabled="true" />
            <Input label="Contact" value="+91 9999999999" disabled="true" />
            <Input label="Lead From" value="Website" disabled="true" />
          </InputGroup>
        </div>
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6">
        <div className="flex justify-between items-center my-4">
          <h2 className="font-bold text-blue">Order - Sell</h2>
          <Button
            type="button"
            buttonText="View"
            className="bg-lightgray py-1 px-5 text-blue font-normal text-sm"
          />
        </div>
        <div className="flex">
          <div className="text-center">
            <div className="w-36">
              <img src="OrderSell.png" className="w-full" />
            </div>
          </div>
          <div className="flex-1 mx-6">
            <InputGroup>
              <Input label="Property Name" value="Summer house" disabled="true" />
              <Input label="Order Id" value="QWERT-123" disabled="true" />
              <Input label="Subscription Type" value="Gold" disabled="true" />
            </InputGroup>

            <InputGroup>
              <Input
                label="Order status"
                value="Site visit"
                disabled="true"
                inputclasses="border border-green-500"
              />
              <Input label="Contact" value="+91 9999999999" disabled="true" />
              <Input label="Lead From" value="Website" disabled="true" />
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-4 rounded-3xl mb-6">
        <div className="flex justify-between items-center my-4">
          <h2 className="font-bold text-blue">Order - Painting</h2>
          <Button
            type="button"
            buttonText="View"
            className="bg-lightgray py-1 px-5 text-blue font-normal text-sm"
          />
        </div>
        <div className="flex">
          <div className="text-center">
            <div className="w-36">
              <img src="OrderPainting.png" className="w-full" />
            </div>
          </div>
          <div className="flex-1 mx-6">
            <InputGroup>
              <Input label="Property Name" value="Summer house" disabled="true" />
              <Input label="Order Id" value="QWERT-123" disabled="true" />
              <Input label="Subscription Type" value="Gold" disabled="true" />
            </InputGroup>

            <InputGroup>
              <Input
                label="Order status"
                value="Site visit"
                disabled="true"
                inputclasses="border border-green-500"
              />
              <Input label="Contact" value="+91 9999999999" disabled="true" />
              <Input label="Lead From" value="Website" disabled="true" />
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="w-24 h-24 absolute bottom-20 right-10">
        <img src="message.png" className="w-full" />
      </div>
    </Container>
  );
}
