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

export const remove = (data) => {
  return {
    type: 'REMOVE',
    payload: data
  };
}

export const drop = () => {
  return {
    type: 'DROP'
  };
}

