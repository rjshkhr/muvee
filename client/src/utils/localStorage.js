const get = name => JSON.parse(window.localStorage.getItem(name))

const set = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value))
}

const remove = name => {
  window.localStorage.removeItem(name)
}

export default {
  get,
  set,
  remove
}
