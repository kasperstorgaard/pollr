import Horizon from '@horizon/client';

const instance = new Horizon({ host: 'localhost:8181', secure: false });

export { instance };
