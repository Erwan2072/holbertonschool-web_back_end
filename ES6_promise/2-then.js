export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ stattus: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
