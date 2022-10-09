export const GET_FILES = `query MyQuery($userId: uuid_comparison_exp = {}) {
  files(where: {uploadedByUserId: $userId}) {
    id
    mimeType
    name
  }
}`;
