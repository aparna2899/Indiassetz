import Button from './Button';

export default function PropertyDetail({ data }) {
  return (
    <div className="bg-white px-4 py-4 rounded-3xl mb-6 flex">
      <div className="w-1/3">
        <div className="w-full">
          <img src="property1-01.png" className="w-full h-full" />
        </div>
        <div className="w-1/3 flex">
          <img src="property1-02.png" className="mt-4 mr-1" />
          <img src="property1-02.png" className="mt-4 mr-1" />
          <img src="property1-02.png" className="mt-4" />
        </div>
      </div>
      <div className="relative ml-6 mt-2 flex-1">
        <div className="flex justify-between">
          <h3 className="text-xl text-blue font-medium">{data.Name}</h3>
          <h4 className="text-lg text-blue font-medium">{data.Type}</h4>
        </div>

        <div className="w-1/2 text-sm flex mt-2 text-gray">
          <div className="mr-2">Address:</div>
          <p>{data.Address}</p>
        </div>
        <div className="flex my-4 w-1/2">
          <div className="flex items-center flex-1">
            <div className="w-10 mr-2">
              <img src="room.png" />
            </div>
            <p>{data.Rooms}</p>
          </div>
          <div className="flex items-center flex-1">
            <div className="w-10 mr-2">
              <img src="bathroom.png" />
            </div>
            <p>{data.Bathrooms}</p>
          </div>
          <div className="flex items-center flex-1">
            <div className="w-10 mr-2">
              <img src="area.png" />
            </div>
            <p>{data.Area}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="my-4 flex-1">
            <div className="flex mt-6">
              <div className="flex-1">
                <span className="mr-2">Furnish Type</span>
                <strong>{data.Furnish_Type}</strong>
              </div>
              <div className="flex-1">
                <span className="mr-2">State</span>
                <strong>{data.State}</strong>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="flex-1">
                <span className="mr-2">Property Id</span>
                <strong>{data.Property_ID}</strong>
              </div>
              <div className="flex-1">
                <span className="mr-2">City</span>
                <strong>{data.City}</strong>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <strong className="text-3xl text-red">{data.Price}</strong>
            <p className="text-right mt-3">Client valuation</p>
          </div>
        </div>
        <div className="absolute right-5 bottom-0">
          <Button buttonText="View details" className="bg-slate-100 text-blue px-6" />
        </div>
      </div>
    </div>
  );
}
