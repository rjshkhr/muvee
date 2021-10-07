const validateRequest = schema => (req, _res, next) => {
  const options = {
    errors: {
      wrap: {
        label: ''
      }
    }
  }

  const { error } = schema.validate(req.body, options)
  error ? next(error) : next()
}

export default validateRequest
