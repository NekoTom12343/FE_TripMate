import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { getUserMeta } from "../apis/user";


export default function AuthGuard({ Component, role, ...rest }) {
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies(["access_token", "user_info"]);
  const [loading, setLoading] = useState(true); // To handle loading or validation

  useEffect(() => {
    if (!cookies.access_token) {
      navigate("/login")
    }

    // Mock expiration setup
    let expires = new Date();
    expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Validate the access_token and set user_info if valid
    if (cookies.access_token) {
      // validateAuthToken(cookies.access_token);
      getUserMeta(cookies.access_token)
        .then((result) => {
          setCookies("user_info", result, {
            path: "/",
            expires: expires,
            secure: true,
            sameSite: "strict",
          });
        })
        .catch((error) => {
          console.error("Error fetching user meta:", error);
        });
    }

    setLoading(false); // End loading state after handling side effects
  }, [cookies.access_token]);
  if ((role === cookies.user_info.role[0].name) === "user") {
    console.log("User is logged in");
  }
  if (loading) {
    return <div>Loading...</div>; // Render a loading state while waiting for side effects to complete
  }

  return <Component {...rest} />; // Finally render the passed component after validation is done
}
