const first = { name: 'kevin' };
const second = { job: 'programmer' };

const combined = { ...first, ...second, location: 'Indonesia' };
console.log(combined);
