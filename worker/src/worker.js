import connectNATS from './services/nats.js';

const INTERVAL_MINUTES = 15;
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000; // Convert minutes to milliseconds

const startWorker = async () => {
  try {
    const natsClient = await connectNATS();
    console.log('Worker connected to NATS');

    
    publishUpdate(natsClient);

    
    const intervalId = setInterval(() => {
      publishUpdate(natsClient);
    }, INTERVAL_MS);

    
    process.on('SIGTERM', () => {
      clearInterval(intervalId);
      console.log('Worker shutting down...');
      process.exit(0);
    });

    process.on('SIGINT', () => {
      clearInterval(intervalId);
      console.log('Worker shutting down...');
      process.exit(0);
    });

  } catch (err) {
    console.error('Worker failed to start:', err);
    process.exit(1);
  }
};

function publishUpdate(natsClient) {
  console.log('Publishing update trigger');
  natsClient.publish('crypto.update', JSON.stringify({ 
    trigger: 'update',
    timestamp: new Date().toISOString() 
  }));
}

startWorker();