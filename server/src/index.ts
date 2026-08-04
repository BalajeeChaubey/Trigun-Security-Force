import http from 'node:http';
import { Server } from 'socket.io';
import { app } from './app.js';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';
import { guardTracking } from './routes/mockData.js';

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: env.frontendUrl, credentials: true } });

io.on('connection', (socket) => {
  socket.emit('tracking:init', guardTracking);
  const interval = setInterval(() => {
    socket.emit('tracking:update', guardTracking.map((item, index) => ({ ...item, lat: item.lat + index * 0.00001, lng: item.lng + index * 0.00002 })));
  }, 4000);
  socket.on('disconnect', () => clearInterval(interval));
});

connectDb().finally(() => {
  server.listen(env.port, () => console.log(`TRIGUN API running on http://localhost:${env.port}`));
});
