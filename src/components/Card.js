import classnames from 'classnames';

export default function Card({ heading, viewall, data, className = '', children }) {
  return (
    <div className={classnames('rounded-b-2xl my-6', [className])}>
      <div className="bg-blue text-white p-6 flex justify-between rounded-t-2xl">
        <strong className="text-xl font-medium">{heading}</strong>
        <span className="underline cursor-pointer hover:no-underline hover:bg-white hover:px-2 hover:text-blue hover:rounded-2xl">
          {viewall}
        </span>
      </div>
      <table className="w-full rounded-b-2xl">
        <thead className=" bg-[#6C89A4] w-full">
          <tr className="text-white">
            {Object.keys(data[0]).map((field) => (
              <th key={field} className="py-3 px-4 text-left">
                {field}
              </th>
            ))}
            <th className="relative py-3 px-6 ">
              <span className="sr-only"></span>
            </th>
          </tr>
          <div className="w-full bg-[#6C89A4]"></div>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="py-2 pl-4 bg-white text-blue border-b border-lightgray">
              {Object.values(row).map((value, index) =>
                value === 'Drop Off' || value === 'Cancelled' ? (
                  <td key={index}>
                    <div className="bg-lightgray my-2 py-2 px-2 rounded-md text-center w-4/5">
                      {value}
                    </div>
                  </td>
                ) : (
                  <td key={index} className={'px-4'}>
                    {value}
                  </td>
                )
              )}
              <div className="my-2">{children}</div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
