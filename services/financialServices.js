async function getFinancialEventByUserId(user) {
  const events = await financialRepository.getFinancialEventByUserId(user)

  return events
}

async function getSummedFinancialEventByUserId(user) {
  const events = await financialRepository.getFinancialEventByUserId(user)

  const sum = events.rows.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0,
  )

  return sum
}

async function insertNewFinancialEvent(user, value, type) {
  if (!value || !type) {
    throw { type: "bad_request", message: "empty value or type" }
  }

  const financialTypes = ["INCOME", "OUTCOME"]

  if (!financialTypes.includes(type)) {
    throw { type: "bad_request", message: "type must be 'income' or 'outcome'" }
  }

  if (value < 0) {
    throw { type: "bad_request", message: "value must be greater than 0" }
  }

  await financialRepository.insertNewFinancialEvent(user, value, type)
}

export const financialServices = {
  getFinancialEventByUserId,
  getSummedFinancialEventByUserId,
  insertNewFinancialEvent,
}
