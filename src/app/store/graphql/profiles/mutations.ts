export const INSERT_PROFILE = `
  mutation AddProfile($id: uuid, $dateOfBirth: date, $gender: genders_enum, $seekingGender: genders_enum) {
    profile: insert_profiles_one(object: {date_of_birth: $dateOfBirth, id: $id, gender: $gender, seeking_gender: $seekingGender}) {
      dateOfBirth: date_of_birth
      gender
      seekingGender: seeking_gender
      updatedAt: updated_at
    }
}`;

export const UPDATE_PROFILE = `
  mutation AddProfile($id: uuid, $dateOfBirth: date, $gender: String, $seekingGender: Int, $interests: String = "", $bio: String = "", $maritalStatus: Int!, $ethnicGroup: Int!) {
  profile: insert_profiles_one(object: {bio: $bio, dateOfBirth: $dateOfBirth, id: $id, ethnicGroup: $ethnicGroup, gender: $gender, maritalStatus: $maritalStatus, interests: $interests, seekingGender: $seekingGender}) {
    area
    bio
    city
    country
    gender
    id
    location
    province
    religion
    sexuality
  }
}`;

export const UPDATE_PROFILE_BIO = `
mutation updateLocation($id: uuid!, $bio: String) {
  profile: update_profiles_by_pk(pk_columns: {id: $id}, _set: {bio: $bio}) {
    bio
  }
}`;

export const UPDATE_PROFILE_LOCATION = `
mutation updateLocation($id: uuid!, $province: String!, $country: String!, $city: String!, $area: String!) {
  location: update_profiles_by_pk(pk_columns: {id: $id}, _set: {area: $area, city: $city, country: $country, province: $province}) {
    area
    city
    country
    province
  }
}`;
