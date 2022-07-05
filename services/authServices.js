async function insertNewUser(name, email, password) {
  if (!name || !email || !password) {
    throw { type: "bad_request", message: "empty user, email or password" }
  }

  const existingUsers = await userRepository.getUserByEmail(email)

  if (existingUsers.rowCount > 0) {
    throw { type: "conflict", message: "user already exists" }
  }

  const hashedPassword = bcrypt.hashSync(password, 12)

  await userRepository.insertNewUser(name, email, hashedPassword)
}

async function loginUser(email, password) {
  if (!email || !password) {
    throw { type: "bad_request", message: "empty email or password" }
  }

  const { rows } = await userRepository.getUserByEmail(email)
  const [user] = rows

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw { type: "unauthorized", message: "wrong password" }
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
  )

  return token
}

export const authServices = { insertNewUser, loginUser }
