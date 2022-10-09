export enum AttributeEnum {
  Gender = 'genders',
  Ethnicity = 'ethnic_groups',
  MaritalStatus = 'marital_statuses',
  Religion = 'religions',
}

export interface AttributeLookup {
  id: number;
  name: string;
}
