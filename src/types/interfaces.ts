export interface FormState {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  terms?: string;
}

export interface CollectionForm {
  forms: FormState[];
}
