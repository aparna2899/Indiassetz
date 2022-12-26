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
  const previousDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
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
          disabled={previousDisabled}
          className="bg-blue text-white py-1 rounded-none"></Button>
        <span className="font-bold mx-4">{currentPage}</span>
        <Button
          buttonText=">"
          onClick={paginateFront}
          disabled={nextDisabled}
          className="bg-blue text-white py-1 rounded-none"></Button>
      </div>
    </div>
  );
};

export default Pagination;