const unknownEndpoint = (_req, res) => {
  res.status(404).json({ error: 'unknown endpoint' })
}

export default unknownEndpoint
