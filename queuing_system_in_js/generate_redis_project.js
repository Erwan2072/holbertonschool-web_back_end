const fs = require('fs');
const path = require('path');

const dir = 'queuing_system_in_js';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const files = {
  "README.md": "# Queuing System in JS\n\nCe projet contient des exercices autour de Redis, Node.js, Kue, et Express.",

  // Exos 0 à 6
  "0-redis_client.js": `import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(\`Redis client not connected to the server: \${err.message}\`));`,

  "1-redis_op.js": `import redis from 'redis';
const client = redis.createClient();
client.on('connect', () => console.log('Redis client connected to the server'));

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => console.log(reply));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');`,

  "2-redis_op_async.js": `import redis from 'redis';
import { promisify } from 'util';
const client = redis.createClient();
client.on('connect', () => console.log('Redis client connected to the server'));

const getAsync = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
  console.log(await getAsync(schoolName));
}

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');`,

  "4-redis_advanced_op.js": `import redis from 'redis';
const client = redis.createClient();
client.on('connect', () => console.log('Redis client connected to the server'));

const schools = {
  Portland: 50, Seattle: 80, "New York": 20, Bogota: 20, Cali: 40, Paris: 2
};

for (const [city, value] of Object.entries(schools)) {
  client.hset("HolbertonSchools", city, value, redis.print);
}

client.hgetall("HolbertonSchools", (err, res) => console.log(res));`,

  "5-subscriber.js": `import redis from 'redis';
const client = redis.createClient();

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(\`Redis client not connected to the server: \${err.message}\`));

client.subscribe('holberton school channel');

client.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
});`,

  "5-publisher.js": `import redis from 'redis';
const client = redis.createClient();

client.on('connect', () => console.log('Redis client connected to the server'));

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(\`About to send \${message}\`);
    client.publish('holberton school channel', message);
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);`,

  "6-job_creator.js": `import kue from 'kue';
const queue = kue.createQueue();

const job = queue.create('push_notification_code', {
  phoneNumber: '4153518780',
  message: 'This is the code to verify your account'
}).save(err => {
  if (!err) console.log(\`Notification job created: \${job.id}\`);
});

job.on('complete', () => console.log('Notification job completed'));
job.on('failed', () => console.log('Notification job failed'));`,

  "6-job_processor.js": `import kue from 'kue';
const queue = kue.createQueue();

function sendNotification(phoneNumber, message) {
  console.log(\`Sending notification to \${phoneNumber}, with message: \${message}\`);
}

queue.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});`,

  // Exercice 7
  "7-job_creator.js": `import kue from 'kue';
const queue = kue.createQueue();

const jobs = [
  { phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '4153518781', message: 'This is the code 4562 to verify your account' },
  { phoneNumber: '4153518743', message: 'This is the code 4321 to verify your account' },
  { phoneNumber: '4153538781', message: 'This is the code 4562 to verify your account' },
  { phoneNumber: '4153118782', message: 'This is the code 4321 to verify your account' },
  { phoneNumber: '4153718781', message: 'This is the code 4562 to verify your account' },
  { phoneNumber: '4159518782', message: 'This is the code 4321 to verify your account' },
  { phoneNumber: '4158718781', message: 'This is the code 4562 to verify your account' },
  { phoneNumber: '4153818782', message: 'This is the code 4321 to verify your account' },
  { phoneNumber: '4154318781', message: 'This is the code 4562 to verify your account' },
  { phoneNumber: '4151218782', message: 'This is the code 4321 to verify your account' }
];

jobs.forEach(data => {
  const job = queue.create('push_notification_code_2', data).save(err => {
    if (!err) console.log(\`Notification job created: \${job.id}\`);
  });

  job.on('complete', () => console.log(\`Notification job \${job.id} completed\`));
  job.on('failed', err => console.log(\`Notification job \${job.id} failed: \${err.message}\`));
  job.on('progress', (p) => console.log(\`Notification job \${job.id} \${p}% complete\`));
});`,

  "7-job_processor.js": `import kue from 'kue';
const queue = kue.createQueue();

const blacklist = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100);
  if (blacklist.includes(phoneNumber)) {
    return done(new Error(\`Phone number \${phoneNumber} is blacklisted\`));
  }
  job.progress(50, 100);
  console.log(\`Sending notification to \${phoneNumber}, with message: \${message}\`);
  done();
}

queue.process('push_notification_code_2', 2, (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});`,

  // Exercice 8
  "8-job.js": `export default function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) throw new Error('Jobs is not an array');

  jobs.forEach(jobData => {
    const job = queue.create('push_notification_code_3', jobData).save(err => {
      if (!err) console.log(\`Notification job created: \${job.id}\`);
    });

    job.on('complete', () => console.log(\`Notification job \${job.id} completed\`));
    job.on('failed', err => console.log(\`Notification job \${job.id} failed: \${err.message}\`));
    job.on('progress', (p) => console.log(\`Notification job \${job.id} \${p}% complete\`));
  });
}`,

  "8-job-main.js": `import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

const queue = kue.createQueue();
const list = [{ phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account' }];
createPushNotificationsJobs(list, queue);`,

  "8-job.test.js": `import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

describe('createPushNotificationsJobs', () => {
  const queue = kue.createQueue();
  before(() => queue.testMode.enter());
  afterEach(() => queue.testMode.clear());
  after(() => queue.testMode.exit());

  it('should throw error if not array', () => {
    expect(() => createPushNotificationsJobs(123, queue)).to.throw('Jobs is not an array');
  });

  it('should create jobs correctly', () => {
    const jobs = [
      { phoneNumber: '123', message: 'Hello' },
      { phoneNumber: '456', message: 'World' }
    ];
    createPushNotificationsJobs(jobs, queue);
    expect(queue.testMode.jobs.length).to.equal(2);
  });
});`,

  // Exercice 9
  "9-stock.js": `import express from 'express';
import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const listProducts = [
  { itemId: 1, itemName: 'Suitcase 250', price: 50, initialAvailableQuantity: 4 },
  { itemId: 2, itemName: 'Suitcase 450', price: 100, initialAvailableQuantity: 10 },
  { itemId: 3, itemName: 'Suitcase 650', price: 350, initialAvailableQuantity: 2 },
  { itemId: 4, itemName: 'Suitcase 1050', price: 550, initialAvailableQuantity: 5 },
];

function getItemById(id) {
  return listProducts.find((item) => item.itemId === id);
}

async function getCurrentReservedStockById(itemId) {
  const stock = await getAsync(\`item.\${itemId}\`);
  return stock ? parseInt(stock) : null;
}

async function reserveStockById(itemId, stock) {
  await setAsync(\`item.\${itemId}\`, stock);
}

const app = express();
const port = 1245;

app.get('/list_products', (req, res) => res.json(listProducts));

app.get('/list_products/:itemId', async (req, res) => {
  const item = getItemById(parseInt(req.params.itemId));
  if (!item) return res.json({ status: 'Product not found' });

  const currentStock = await getCurrentReservedStockById(item.itemId) || item.initialAvailableQuantity;
  res.json({ ...item, currentQuantity: currentStock });
});

app.get('/reserve_product/:itemId', async (req, res) => {
  const item = getItemById(parseInt(req.params.itemId));
  if (!item) return res.json({ status: 'Product not found' });

  let stock = await getCurrentReservedStockById(item.itemId);
  if (stock === null) stock = item.initialAvailableQuantity;

  if (stock <= 0) return res.json({ status: 'Not enough stock available', itemId: item.itemId });

  await reserveStockById(item.itemId, stock - 1);
  res.json({ status: 'Reservation confirmed', itemId: item.itemId });
});

app.listen(port, () => console.log(\`API available on localhost port \${port}\`));`
};

// Écriture des fichiers
for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, filename), content);
}

console.log('✅ Tous les fichiers ont été créés dans le dossier queuing_system_in_js');
