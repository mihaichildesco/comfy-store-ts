import { CartTotals, CheckoutForm, SectionTitle } from "@/components";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/hooks";
import { type ReduxStore } from "@/store";
import { LoaderFunction, redirect } from "react-router-dom";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login to checkout" });
      return redirect("/login");
    }
    return null;
  };

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
export default Checkout;
