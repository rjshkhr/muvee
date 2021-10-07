import bcrypt from 'bcrypt'

const hashPassword = async password => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

const comparePassowrd = async (password, hashedPassword) =>
  await bcrypt.compare(password, hashedPassword)

export { hashPassword, comparePassowrd }
