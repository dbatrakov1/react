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
// With a promise-based API, the asynchronous function starts the operation and returns a Promise object.
// You can then attach handlers to this promise object, and these handlers will be executed when
// the operation has succeeded or failed.
