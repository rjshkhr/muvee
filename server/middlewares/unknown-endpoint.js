const unknownEndpoint = (_req, res) => {
  res.status(404).json({ message: 'unknown endpoint' })
}

export default unknownEndpoint
