export interface FormState {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  terms?: boolean;
}

export interface CollectionForm {
  forms: FormState[];
}
