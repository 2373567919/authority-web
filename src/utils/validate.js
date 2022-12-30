export function isExternal (path) {
  return /^(http?:|mailto:|tel:)/.test(path)
}
