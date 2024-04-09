import { API_ENDPOINT as api } from 'services'

export const saveNewPassword = (data, token) => {
  return api
    .post({
      endpoint: `/change-password/${token}`,
      data,
    })
    .then((response) => response.data)
    .catch((err) => {
      return err
    })
}
