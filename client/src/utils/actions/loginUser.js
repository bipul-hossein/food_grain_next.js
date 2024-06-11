"use server";

export const loginUser = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const loginUserInfo = await res.json();
  return loginUserInfo;
};
