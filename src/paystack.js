export const getPaystackData = async () => {
  const response = await fetch("/api/paystack");
  const data = await response.json();
  return data;
};
