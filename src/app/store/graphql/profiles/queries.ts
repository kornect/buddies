export const GET_PROFILE = `
  query GetProfile($id: uuid!) {
    profile: profiles_by_pk(id: $id) {
      id
      area
      bio
      city
      country
      dateOfBirth: date_of_birth
      gender
      seekingGender: seeking_gender
      province
      updatedAt: updated_at
    }
  }
`;
