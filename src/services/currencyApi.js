const getCurrency = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const removeUSDT = (data.USDT ? delete data.USDT : null);
  if (removeUSDT === true) {
    return data;
  }
};

export default getCurrency;
