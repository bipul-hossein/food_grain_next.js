"use server";

export const registerUser = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const registerUserInfo = await res.json();
  return registerUserInfo;
};
