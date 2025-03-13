export interface FormState {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
}

export interface CollectionForm {
  forms: FormState[];
}
