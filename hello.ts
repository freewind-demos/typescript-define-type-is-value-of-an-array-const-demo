type Group = {
  name: string,
  users: {
    name: string,
    email: string
  }[]
}

type User = Group['users'][0]

const user: User = {
  name: 'typescript',
  email: 'typescript@test.com'
};

console.log(user);
