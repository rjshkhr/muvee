import useEventListener from './useEventListener'

const useClickOutside = (ref, callback) => {
  useEventListener(
    'click',
    e => {
      if (!ref.current || ref.current.contains(e.target)) return
      callback(e)
    },
    document
  )
}

export default useClickOutside
