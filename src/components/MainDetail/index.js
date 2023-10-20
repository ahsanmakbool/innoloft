import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MainDetail = ({ productDetail }) => {
  return (
    <div className="flex flex-col md:flex-row mb-2">
      <div className="hidden md:flex w-1/4 justify-start items-start p-4">
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={productDetail?.user?.profilePicture}
              alt={productDetail?.user?.name}
              class="object-cover w-full h-full"
            />
          </div>
          <div class="ml-4">
            <p class="text-lg font-semibold">
              {(productDetail?.user?.firstName || "") +
                " " +
                (productDetail?.user?.lastName || "")}
            </p>
            <p class="text-gray-600">{productDetail?.user?.position || ""}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white-300 p-4 border border-white-200">
        {/* Second div */}
        <div className="w-full max-w-full">
          <div className="h-[200px] w-full flex items-center justify-center">
            <img
              src={productDetail?.picture}
              alt={productDetail?.name}
              className="h-full"
            />
          </div>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: productDetail?.description }}
          ></div>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-white-300 p-4 border border-white-200">
        <div class="flex-col items-center">
          <h2>Offered By</h2>
          <img
            className="h-8 w-auto mt-2"
            src={productDetail?.company?.logo}
            alt={productDetail?.company?.name}
          />
          <div className="flex mt-2">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={productDetail?.user?.profilePicture}
                alt={productDetail?.user?.name}
                class="object-cover w-full h-full"
              />
            </div>
            <div class="mt-2 ml-4">
              <p class="text-lg font-semibold">
                {(productDetail?.user?.firstName || "") +
                  " " +
                  (productDetail?.user?.lastName || "")}
              </p>
              <p class="text-gray-600">{productDetail?.user?.position || ""}</p>
            </div>
          </div>
          <div class="mt-2 ml-4 flex max-w-[200px]">
            <LocationOnIcon />
            <span>
              {(productDetail?.company?.address?.street || "") +
                " " +
                (productDetail?.company?.address?.house || "") +
                " " +
                (productDetail?.company?.address?.zipCode || "") +
                " " +
                (productDetail?.company?.address?.city?.name || "") +
                " " +
                (productDetail?.company?.address?.country?.name || "")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
