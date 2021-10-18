const getCurrency = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const removeUSDT = (data.USDT ? delete data.USDT : null);
  const removeDOGE = (data.DOGE ? delete data.DOGE : null);
  if (removeUSDT && removeDOGE === true) {
    return data;
  }
};

export default getCurrency;
