export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ stattus: 200, body: 'success' }))
  promise.catch(() => Error())
  promise.finally (() => console.log('Got a response from the API'));
  };
