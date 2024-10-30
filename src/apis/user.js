import apis from ".";

export const getUserMeta = async (token) => {
  try {
    const response = await apis.get("/users/info", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.result : error;
  }
};
