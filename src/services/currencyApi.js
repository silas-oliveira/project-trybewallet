const getCurrency = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  if (data.USDT) {
    delete data.USDT;
  }
  if (data.DOGE) {
    delete data.DOGE;
  }
  return data;
};

export default getCurrency;
