export const GET_USER = `
  query GetUser($id: uuid = "") {
    user(id: $id) {
      lastSeen
      newEmail
      updatedAt
    }
  }
`;
