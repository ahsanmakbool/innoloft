import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/productActions";
const VideoComponent = React.lazy(() => import("../../components/video"));
const MainDetail = React.lazy(() => import("../../components/MainDetail"));
const Offers = React.lazy(() => import("../../components/Offers"));
const ProductDetail = () => {
  const { id } = useParams();
  const productDetail = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <section>
        <MainDetail productDetail={productDetail} />
      </section>
      <section>
        <VideoComponent productDetail={productDetail} />
      </section>
      <section>
        <Offers productDetail={productDetail} />
      </section>
    </>
  );
};

export default ProductDetail;
