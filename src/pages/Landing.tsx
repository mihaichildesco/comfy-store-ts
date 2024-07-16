import { FeaturedProducts, Hero } from "@/components";
import { customFetch, type ProductsResponse } from "@/utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products?featured=true";

export const loader: LoaderFunction = async () => {
  const response = await customFetch<ProductsResponse>(url);
  console.log(response.data);
  return { ...response.data };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
export default Landing;
