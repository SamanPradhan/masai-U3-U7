export interface IPerson {
  // Here declare the keys of your interface
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  PrintFullName: () => string;
}
