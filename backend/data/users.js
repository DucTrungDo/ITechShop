import bcrypt from 'bcryptjs'

const users = [
  { 
    name: 'Duc Admin',
    email: 'ducdt@gmail.com',
    password: bcrypt.hashSync('123456789', 10),
    isAdmin: true,
  },
  {
    name: 'Do Trung Duc',
    email: 'ducdt2192@gmail.com',
    password: bcrypt.hashSync('123456789', 10),
  },
  {
    name: 'Goku',
    email: 'goku@ligma.com',
    password: bcrypt.hashSync('123456789', 10),
  },
]

export default users
