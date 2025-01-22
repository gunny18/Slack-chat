export const registerUserApi = async (userData: object) => {
  const response = await fetch("http://localhost:3000/api/v1/user/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
};

export const loginUserApi = async (userData: object) => {
  const response = await fetch("http://localhost:3000/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
};
