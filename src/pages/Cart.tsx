import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Link to="/" className="text-4xl text-red-900">
        back home
      </Link>
      <div>
        <Button size="lg">
          <Link to="/" className="text-4xl text-red-900">
            home button
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default Cart;
