import loadBalancer from './loadBalancer';

const chinaDownload = new Promise((resolve) => setTimeout(() => resolve('Downloaded from China server'), 100));
const USDownload = new Promise((resolve) => setTimeout(() => resolve('Downloaded from US server'), 200));

loadBalancer(chinaDownload, USDownload)
  .then(value => console.log(value))
  .catch(error => console.error(error));
