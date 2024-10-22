import apis from ".";

export const Login = async (Username, Password) => {
  try {
    const response = await apis.post("/auth/token", {
      username: Username,
      password: Password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
