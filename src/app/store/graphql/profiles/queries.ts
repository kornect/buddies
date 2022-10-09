export const GET_PROFILE = `
  query GetProfile($id: uuid!) {
    profile: profiles_by_pk(id: $id) {
      id
      area
      bio
      city
      country
      dateOfBirth
      ethnicGroup
      gender
      interests
      location
      maritalStatus
      province
      seekingGender
      updatedAt: updated_at
    }
  }
`;
