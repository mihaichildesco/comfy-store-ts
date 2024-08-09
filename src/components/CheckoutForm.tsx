import FormInput from "./FormInput";
import { ActionFunction, Form, redirect } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import { ReduxStore } from "@/store";
import { toast } from "./ui/use-toast";
import { Checkout, customFetch, formatAsDollars } from "@/utils";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast({ description: "Please provide all values" });
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login" });
      return redirect("/login");
    }

    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const result = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      console.log(result);
      toast({ description: "order placed successfully" });
      return redirect("/orders");
    } catch (error) {
      toast({ description: "order failed" });
      return null;
    }

    return null;
  };

function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />

      <SubmitBtn text="Place Your Order" className="mt-4" />
    </Form>
  );
}
export default CheckoutForm;
