import bcrypt from 'bcrypt'

const hashPassword = async password => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

export { hashPassword }
