export const INSERT_USER_PHOTO = `
mutation MyMutation($storageId: uuid!, $url: String!) {
  insert_photos_one(object: {storageId: $storageId, url: $url}) {
    id
    storageId
    url
    userId
  }
}
`;
