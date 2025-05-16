import { connect } from 'nats';
import dotenv from 'dotenv';

dotenv.config();

let natsClient;

const connectNATS = async () => {
  if (!natsClient) {
    natsClient = await connect({ servers: process.env.NATS_URL });
    console.log('Connected to NATS');
  }
  return natsClient;
};

export default connectNATS;