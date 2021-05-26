import Text from './text.json'
export const validateGenral = values => {
  const errors = {}
  if (!values.FirstName) {
    errors.FirstName = Text.required
  }
  if (!values.LastName) {
    errors.LastName = Text.required
  }
  if (!/^[0-9]+$/.test(values.Phone)) {
    errors.Phone = Text.required
  }
  if (!values.Email) {
    errors.Email = Text.required
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = Text.emailIncorrect
  }
  return errors
}

export const validateAdress = values => {
  const errors = {}
  if (!values.company) {
    errors.company = Text.required
  }
  if (!values.firstName) {
    errors.firstName = Text.required
  }
  if (!values.lastName) {
    errors.lastName = Text.required
  }
  if (!values.vatNumber) {
    errors.vatNumber = Text.required
  }
  if (!values.addressLine1) {
    errors.addressLine1 = Text.required
  }
  if (!values.city) {
    errors.city = Text.required
  }
  if (!values.postalCode) {
    errors.postalCode = Text.required
  }
  if (!values.country) {
    errors.country = Text.required
  }

  return errors
}
