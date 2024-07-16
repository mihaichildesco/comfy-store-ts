import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo user",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <header>
      <div className="mx-auto max-w-6xl px-8 align-element flex justify-center sm:justify-end py-2">
        {/* USER */}

        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
