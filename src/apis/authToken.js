import apis from ".";

export async function validateAuthToken(authToken) {
  try {
    const result = await apis.post("/auth/introspect", {
      token: authToken,
    });

    return result;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
