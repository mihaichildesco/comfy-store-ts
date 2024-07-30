import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import { ProductsResponseWithParams } from "@/utils";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        name="search"
        label="Search Product"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Select Company"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="Select Company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="Order By"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange label="Price" name="price" defaultValue={price} />

      {/* SHIPPING */}
      <FormCheckBox
        label="Free shipping"
        name="shipping"
        defaultValue={shipping}
      />

      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        variant="outline"
        size="sm"
        className="self-end mb-2"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
}
export default Filters;
