type Group = {
  name: string,
  users: {
    name: string,
    email: string
  }[]
}

//type User = Group['users'][0]
type User = Group['users'][number]

const user: User = {
  name: 'typescript',
  email: 'typescript@test.com'
};

console.log(user);
