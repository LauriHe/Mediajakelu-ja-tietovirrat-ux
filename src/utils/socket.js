import { io } from 'socket.io-client';

const URL = import.meta.env.NODE_ENV === 'production' ? undefined : 'https://mdds-server-lauhei.northeurope.cloudapp.azure.com/';

export const socket = io(URL);
