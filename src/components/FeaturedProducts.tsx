import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

function FeaturedProducts() {
  return (
    <section className="pt-24">
      <SectionTitle text="featured product" />
      <ProductsGrid />
    </section>
  );
}
export default FeaturedProducts;
