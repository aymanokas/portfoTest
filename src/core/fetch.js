const fetch =  async (...p) => {
  const args = p[1] || {}

  args.headers = args.headers || {}

  // args.headers.Authorization = 'Bearer 13c6a0337fc642827efe0e6aa67a003bc1dbb'

  p[1] = args
  const result = await window.fetch(...p)
  if (result.status === 400) throw new Error('failed')
  return result.json()
}

export default fetch