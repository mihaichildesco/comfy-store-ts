import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormInput, SubmitBtn } from "@/components";
import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useNavigate,
} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks";
import { AxiosResponse } from "axios";
import { customFetch } from "@/utils";
import { loginUser } from "@/features/user/userSlice";
import { toast } from "@/components/ui/use-toast";
import { ReduxStore } from "@/store";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response: AxiosResponse = await customFetch.post(
        "/auth/local",
        data
      );
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(loginUser({ username, jwt }));
      toast({ description: "Login successful" });

      return redirect("/");
    } catch (error) {
      toast({ description: "Login failed" });
      return null;
    }
  };

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate("/");
    } catch (error) {
      toast({ description: "Login failed" });
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" name="password" />
            <SubmitBtn text="Login" className="w-full mt-4" />

            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuestUser}
              className="w-full mt-4"
            >
              Guest User
            </Button>
            <p className="mt-4 text-center">
              Already a member ?{" "}
              <Button type="button" asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>{" "}
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
