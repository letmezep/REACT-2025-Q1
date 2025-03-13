export interface FormState {
  name: string;
  age: number;
  email: string;
  password: string;
}

export interface CollectionForm {
  forms: FormState[];
}
