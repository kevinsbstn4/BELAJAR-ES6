const person = {
  name: 'Kevin',
  walk() {},
  talk() {}
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'John';
