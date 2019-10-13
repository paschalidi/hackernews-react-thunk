export function action(type, data) {
  return { type, data };
}

export function error(type, err) {
  return { type, err };
}
