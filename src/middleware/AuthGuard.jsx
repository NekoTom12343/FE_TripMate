import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getUserMeta } from "../apis/user";
import { validateAuthToken } from "../apis/authToken";
import { useNavigate } from "react-router-dom";

export default function AuthGuard({ Component, role, ...rest }) {
  const [cookies, setCookies] = useCookies(["access_token", "user_info"]);
  const [loading, setLoading] = useState(true); // To handle loading or validation
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    if (!cookies.access_token) {
      // If access token is not available, redirect or set a default token for demonstration
      // setCookies(
      //   "access_token",
      //   "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaHVuVHJ1biIsInN1YiI6ImFkbWluIiwiZXhwIjoxNzI4Mjc2MDc1LCJpYXQiOjE3MjgxODk2NzUsImp0aSI6IjRiYzUwZmZiLTk4ZGMtNGY0Ni05MjUwLWQ3ZGFhNzIwNzIyZSIsInNjb3BlIjoiUk9MRV9BRE1JTiB1cGRhdGUgdXNlciBjcmVhdGUgdXNlciBkZWxldGUgdXNlciJ9.UNB2WMGV_wmrUcpDMAC4Q8KFx1P1m7EL5l4lCTze0HKHm9zgQdPomqdRIIr5Wrlj1WdnggTZRmCpihrQxlj7Qw",
      //   {
      //     path: "/",
      //     maxAge: 7 * 24 * 60 * 60, // 7 days
      //     secure: true,
      //     sameSite: "strict",
      //   }
      // );
      navigate("/login");
    }

    // Mock expiration setup
    let expires = new Date();
    expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Validate the access_token and set user_info if valid
    if (cookies.access_token) {
      validateAuthToken(cookies.access_token).then(async (authResult) => {
        if (authResult.status === 200) {
          await getUserMeta(cookies.access_token)
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
        } else {
          setCookies("access_token", null);
        }
      });
    }

    setLoading(false); // End loading state after handling side effects
  }, [cookies.access_token]);
  if ((role === cookies.user_info.result.roles[0].name) === "user") {
    console.log("User is logged in");
  }
  if (loading) {
    return <div>Loading...</div>; // Render a loading state while waiting for side effects to complete
  }

  return <Component {...rest} />; // Finally render the passed component after validation is done
}
