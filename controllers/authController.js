import { authServices } from "../services/authServices.js"

export async function insertNewUser(req, res) {
  try {
    const { name, email, password } = req.body

    await authServices.insertNewUser(name, email, password)

    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body

    const token = await authServices.loginUser(email, password)

    res.send({
      token,
    })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}
