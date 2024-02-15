import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (error) => logger.error('RedisError', error));
redisClient.on('connect', (connect) => logger.info('Redis Connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = { connect };
