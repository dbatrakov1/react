fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    return response.json();
  })
  .then((data) => {
    console.log(data[0]);
  });
