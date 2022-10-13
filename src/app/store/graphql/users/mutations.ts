export const UPDATE_AVATAR = `
mutation UpdateAvatar($id: uuid!, $avatarUrl: String!) {
  updateUser(pk_columns: { id: $id }, _set: { avatarUrl: $avatarUrl }) {
    id
    avatarUrl
  }
}
`;

export const UPDATE_DISPLAY_NAME = `
mutation UpdateDisplayName($id: uuid!, $displayName: String!) {
  updateUser(pk_columns: { id: $id }, _set: { displayName: $displayName }) {
    displayName
  }
}
`;

export const UPDATE_PHONE_NUMBER = `
mutation UpdatePhoneNumber($id: uuid!, $phoneNumber: String!) {
  updateUser(pk_columns: { id: $id }, _set: { phoneNumber: $phoneNumber }) {
    id
    phoneNumber
  }
}
`;

export const DELETE_USER = `
  mutation deleteUser($id: uuid = "") {
    deleteUser(id: $id)
  }
`;
