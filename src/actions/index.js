export const initial = (data) => {
  return {
    type: 'INITIAL',
    payload: data
  };
}

export const push = (data) => {
  return {
    type: 'PUSH',
    payload: data
  };
}
