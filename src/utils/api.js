export const registerUser = async (data) => {
  const response = fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  return response.json();
};
