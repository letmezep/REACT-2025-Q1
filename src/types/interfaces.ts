export interface FormState {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms?: boolean;
  file?: string;
}

export interface CollectionForm {
  forms: FormState[];
}
