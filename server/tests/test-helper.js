import userService from '../services/user.service.js'

const initialUsers = [
  {
    name: 'root',
    email: 'root@email.com',
    passwordHash: 'rootuser'
  },
  {
    name: 'user1',
    email: 'user1@email.com',
    passwordHash: 'firstuser'
  }
]

const usersInDb = async () => await userService.getAllUsers()

export default {
  initialUsers,
  usersInDb
}
