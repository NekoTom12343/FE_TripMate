import apis from ".";

export const Login = async (Email, Password) => {
  try {
    const response = await apis.post("/login", {
      email: Email,
      password: Password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
