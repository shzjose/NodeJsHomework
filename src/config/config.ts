import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3300;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

const SECRET_TOKEN = process.env.SECRET_TOKEN || 'superpasswordkey';

const SECRETS = {
    token: SECRET_TOKEN
}

const config = {
    server: SERVER,
    secrets: SECRETS
}

export default config;