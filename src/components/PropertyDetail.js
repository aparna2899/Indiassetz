import Input from './Input';
import TotalProperties from './TotalProperties';
import Chart from './Chart';
import Card from './Card';
import Button from './Button';
import RedBox from './RedBox';
import ProfilePic from './ProfilePic';

export default function PropertyDetail({ data, openOrders, closedOrders, handleClick }) {
  let uploadedDocs = [];
  let notUploadedDocs = [];

  for (let i = 0; i < 6; i++) {
    uploadedDocs.push(<RedBox key={i} className="bg-[#FD0100]" />);
  }
  for (let i = 0; i < 11; i++) {
    notUploadedDocs.push(<RedBox key={i} className="bg-transparent border border-[#FD0100]" />);
  }

  return (
    <div className="bg-white fixed top-0 bottom-0 left-0 right-0 overflow-y-scroll px-24 z-10 ">
      <div className="flex justify-between shadow-md fixed top-0 left-0 right-0 h-16 z-20 bg-white px-24 items-center">
        <h1 className="text-2xl text-blue font-medium">Property details</h1>
        <Button buttonText="X" onClick={handleClick} className="bg-lightgray py-1" />
      </div>
      <div className="flex justify-end items-center pt-24 pb-10 ">
        <div className="w-4 mx-1">
          <img src="EditIcon.png" className="w-full" />
        </div>
        <span className="underline text-blue font-base cursor-pointer inline-block">Edit</span>
      </div>

      <div className="flex items-center">
        <div className="w-96 h-44 flex-1">
          <img src="property1-01.png" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="flex-1 mx-6">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Client name"
            value="Jay shetty"
          />
          <div className="flex">
            <Input
              className="my-2"
              inputclasses="bg-slate-100"
              label="Client Id"
              value="Jay shetty"
            />
            <Input
              className="my-2"
              inputclasses="bg-slate-100"
              label="Property Id"
              value={data.Property_ID}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center items-center">
            <TotalProperties
              numberOfProperty="02"
              className="flex-1 mr-10 bg-slate-100 my-0 h-full border border-lightgray py-9 text-center rounded-md  px-0 flex-col-reverse"
              strongClasses="text-8xl"
            />

            <Chart
              className="flex-1 my-2 py-5 bg-slate-100 border border-lightgray flex-col-reverse rounded-md "
              chartClasses="my-auto"
              innerTextClasses="inset-0 top-1/2 mt-0 left-1/3 pl-3"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <div className="flex mx-0">
            {data.Images.map((pathToImg, index) =>
              index > 0 && index < 3 ? (
                <img key={index} src={pathToImg} className="mt-4 mr-3 w-32 box-border" />
              ) : null
            )}
            <div className="w-full h-26 rounded-md bg-skyblue mt-4">
              <div className="flex items-center justify-center h-full text-5xl font-extralight text-blue border border-blue border-dashed cursor-pointer">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  mx-6">
          <div className="flex">
            <Input
              className="my-2"
              inputclasses="bg-slate-100"
              label="Subscription Type"
              value="GOLD"
            />
            <Input
              className="my-2"
              inputclasses="bg-slate-100"
              label="Contact"
              value="+91 9999999999"
            />
          </div>
        </div>
        <div className="flex-1">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Email"
            value="jayshetty121@gmail.com"
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Property Category"
            value={data.Type}
          />
        </div>
        <div className="flex-1  mx-6">
          <Input className="my-2" inputclasses="bg-slate-100" label="Property Type" value="Villa" />
        </div>
        <div className="flex-1">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Project & Society Name"
            value="Prestige Golfshire"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Input className="my-2" inputclasses="bg-slate-100" value={data.City} />
        </div>
        <div className="flex-1 mx-6">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Ownership"
            value="Owned by self"
          />
        </div>
        <div className="flex-1">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Occupancy Status"
            value="Self occupied"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Build up Area (sq. ft.)"
            value={data.Area}
          />
        </div>
        <div className="flex-1  mx-6">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Current Property Value"
            value="???46,400,000"
          />
        </div>
        <div className="flex-1">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Save Property as"
            value="Summer house"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 flex">
          <Input
            label="Bedrooms"
            value={data.Rooms}
            input
            className="my-2"
            inputclasses="bg-slate-100"
            classes="flex-1"
          />
          <Input
            label="Bathrooms"
            value={data.Bathrooms}
            input
            className="my-2"
            inputclasses="bg-slate-100"
            classes="flex-1"
          />
        </div>
        <div className="flex-1  mx-6">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Furnishing"
            value={data.Furnish_Type}
          />
        </div>
        <div className="flex-1">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Expected selling price"
            value="???50,400,000 "
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 flex">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="No. of Floors"
            value="03"
            input
            classes="flex-1"
          />
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Property on floor"
            value="02"
            input
            classes="flex-1"
          />
        </div>
        <div className="flex-1  mx-6">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Property Age (in Years)"
            value="5 years"
          />
        </div>
        <div className="flex-1">
          <Input className="my-2" inputclasses="bg-slate-100" label="Property Facing" value="-" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 flex">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Covered parking "
            value="Yes"
            input
            classes="flex-1"
          />
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Number"
            value={data.Property_ID}
            input
            classes="flex-1"
          />
        </div>
        <div className="flex-1 flex  mx-6">
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Lift availability"
            value={data.Property_ID}
            input
            classes="flex-1"
          />
          <Input
            className="my-2"
            inputclasses="bg-slate-100"
            label="Number"
            value="2"
            input
            classes="flex-1"
          />
        </div>
        <div className="flex-1 flex">
          <Input
            className="my-2"
            inputclasses="flex-1 bg-slate-100"
            label="Open parking"
            value="Yes"
          />
          <Input className="my-2" inputclasses="flex-1 bg-slate-100" label="Number" value="2" />
        </div>
      </div>
      <Input
        type="textarea"
        inputclasses="bg-slate-100"
        label="About property"
        value="L??rem ipsum anita Samuelsson nuskade nusk i promotiv. Pia Bergman queerpolska. Nevis metates. Margareta Ali lager. Blattesvenska termotologi nug??rar. Bens sper. "
      />
      <h3 className="mb-2 mx-2 text-blue">Amenities</h3>
      <div className="border border-lightgray mx-2 h-28 py-4 rounded-md">
        {data.Amenities.map((amenity) => (
          <span
            key={amenity}
            className="bg-lightgray text-blue mx-2 font-light px-3 py-1 rounded-md">
            {amenity}
          </span>
        ))}
      </div>
      <div className="rounded-b-2xl my-6 shadow-md">
        <div className="bg-blue text-white p-6 flex justify-between rounded-t-2xl">
          <strong className="text-xl font-medium">Documents</strong>
        </div>
        <div className="px-6 py-6">
          <strong className="text-3xl text-[#FD0100]">45%</strong>
          <span className="text-gray text-sm mx-4">(6 of 16 is uploaded)</span>
        </div>
        <div className="flex px-4">
          <div className="flex">{uploadedDocs}</div>
          <div className="flex">{notUploadedDocs}</div>
        </div>
        <div className="flex items-center px-4 pt-12 pb-8">
          <ProfilePic pathToImg="profilepic.png" />
          <div className="flex-1">
            <p className="text-gray mb-1">Uploaded by</p>
            <strong className="text-blue font-normal">Nalini</strong>
          </div>
          <div className="flex-1">
            <p className="text-gray mb-1">Uploaded on</p>
            <strong className="text-blue font-normal">13.11.2022 11:30am</strong>
          </div>
          <div className="flex-1">
            <p className="text-gray mb-1">Last Update</p>
            <strong className="text-blue font-normal">02.12.2022 12:30pm</strong>
          </div>
          <Button
            buttonText="View Documents"
            className="border border-lightgray text-blue px-6 py-2 mr-6 hover:bg-lightgray"
          />
        </div>
      </div>
      <Card heading="Open orders" viewall="View all" data={openOrders} className="shadow-md">
        <Button
          type="button"
          buttonText="View details"
          className="text-blue bg-transparent border border-lightgray px-2 hover:bg-lightgray"
        />
      </Card>
      <Card heading="Closed orders" viewall="View all" data={closedOrders} className="shadow-md">
        <Button
          type="button"
          buttonText="View details"
          className="text-blue bg-transparent border border-lightgray px-2 hover:bg-lightgray "
        />
      </Card>
    </div>
  );
}
