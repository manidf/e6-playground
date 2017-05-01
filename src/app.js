import user from './user';

const root  = document.querySelector('#app');

const name = user.name;
root.innerHTML = `<p>Hello ${name}</p>`;
