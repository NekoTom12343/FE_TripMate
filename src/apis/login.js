import apis from ".";

export const Login = async (Username, Password) => {
  try {
    const response = await apis.post("/login", {
      username: Username,
      password: Password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
