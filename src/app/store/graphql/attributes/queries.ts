export const GET_ATTRIBUTE = `
  query GetAttributes {
    genders: attributes_genders {
      id
      name
    }
    sexualities: attributes_sexualities {
      id
      name
    }
    religions: attributes_religions {
      id
      name
    }
    ethnicGroups: attributes_ethnic_groups {
      id
      name
    }
    maritalStatuses: attributes_marital_statuses {
      id
      name
    }
  }
`;
