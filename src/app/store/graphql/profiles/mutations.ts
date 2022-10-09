export const INSERT_PROFILE = `
  mutation AddProfile($id: uuid, $dateOfBirth: date, $gender: Int, $seekingGender: Int, $interests: String = "", $bio: String = "", $maritalStatus: Int!, $ethnicGroup: Int!) {
  profile: insert_profiles_one(object: {bio: $bio, dateOfBirth: $dateOfBirth, id: $id, ethnicGroup: $ethnicGroup, gender: $gender, maritalStatus: $maritalStatus, interests: $interests, seekingGender: $seekingGender}) {
    area
    bio
    city
    country
    dateOfBirth
    ethnicGroup
    gender
    id
    interests
    location
    maritalStatus
    province
    religion
    seekingGender
    sexuality
    updatedAt: updated_at
  }
}`;

export const UPDATE_PROFILE_LOCATION = `
mutation updateLocation($id: uuid!, $location: geography!, $province: String!, $country: String!, $city: String!, $area: String!) {
  location: update_profiles_by_pk(pk_columns: {id: $id}, _set: {area: $area, city: $city, country: $country, location: $location, province: $province}) {
    area
    city
    country
    location
    province
  }
}`;
