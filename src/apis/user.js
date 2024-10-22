import apis from ".";

export const getUserMeta = async (token) => {
  try {
    const response = await apis.get("/user/info", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.result;
  } catch (error) {
    throw error.response ? error.response.result : error;
  }
};
