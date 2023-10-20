import React from "react";

const Offers = ({ productDetail }) => {
  return (
    <div className="flex flex-col md:flex-row mt-2 md-3">
      <div className="hidden md:flex w-1/4 justify-start items-start p-4"></div>
      <div className="w-full flex flex-col border border-gray-200">
        <div className="flex w-full">
          <h2 className="text-xl">Offer Details</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-col w-full md:w-1/2">
            <h2 className="text-gray-500">Technology</h2>
            <div className="flex space-x-2">
              {productDetail?.categories?.map((item) => (
                <span
                  className="px-2 py-1  bg-gray-200 text-gray-500 rounded-full text-center"
                  key={item.id}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-col  w-full md:w-1/2">
            <h2 className="text-gray-500">Business Models</h2>
            <div className="flex space-x-2">
              {productDetail?.businessModels?.map((item) => (
                <span
                  className="px-2 py-1 bg-gray-200 text-gray-500 rounded-full text-center"
                  key={item?.id}
                >
                  {item?.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-col w-full md:w-1/2">
            <h2 className="text-gray-500">TRL</h2>
            <div className="flex space-x-2">
              <span
                className="px-2 py-1  bg-gray-200 text-gray-500 rounded-full text-center"
                key={productDetail?.trl?.id}
              >
                {productDetail?.trl?.name || ""}
              </span>
            </div>
          </div>
          <div className="flex-col  w-full md:w-1/2">
            <h2 className="text-gray-500">Costs</h2>
            <div className="flex space-x-2">
              <span className="px-2 py-1  bg-gray-200 text-gray-500 rounded-full text-center">
                {productDetail?.investmentEffort}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
