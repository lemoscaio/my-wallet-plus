async function insertNewFinancialEvent(req, res) {
  try {
    const { value, type } = req.body
    const { user } = res.locals

    await financialServices.insertNewFinancialEvent(user, value, type)

    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

async function getFinancialEventByUserId(req, res) {
  try {
    const { user } = res.locals

    const events = await financialServices.getFinancialEventByUserId(user)

    res.send(events.rows)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

async function getSummedFinancialEventByUserId(req, res) {
  try {
    const { user } = res.locals

    const sum = await financialServices.getSummedFinancialEventByUserId(user)

    res.send({ sum })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}
