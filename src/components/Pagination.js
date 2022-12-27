import React from 'react';
import Button from './Button';

const Pagination = ({
  totalPages,
  pageSize,
  paginateFront,
  paginateBack,
  currentPage,
  totalData
}) => {
  return (
    <div className="flex justify-end items-center">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium mx-1">{currentPage + 1 * pageSize - 10}</span>
          to
          <span className="font-medium mx-1"> {currentPage * pageSize} </span>
          of
          <span className="font-medium"> {totalData} </span>
        </p>
      </div>
      <div className="flex justify-between items-center ml-6">
        <Button
          buttonText="<"
          onClick={paginateBack}
          disabled={currentPage === 1 ? true : false}
          className={
            currentPage === 1
              ? 'bg-blue text-white py-1 rounded-none bg-lightgray'
              : 'bg-blue text-white py-1 rounded-none'
          }></Button>
        <span className="font-bold mx-4">{currentPage}</span>
        <Button
          buttonText=">"
          onClick={paginateFront}
          disabled={currentPage === totalPages ? true : false}
          className={
            currentPage === totalPages
              ? 'bg-blue text-white py-1 rounded-none bg-lightgray'
              : 'bg-blue text-white py-1 rounded-none'
          }></Button>
      </div>
    </div>
  );
};

export default Pagination;
