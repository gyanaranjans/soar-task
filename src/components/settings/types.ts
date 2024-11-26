export interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  path?: string;
}

export interface InputFieldProps {
  label: string;
  value: string;
  type?: string;
  hasIcon?: boolean;
  error?: string;
}

export interface ProfileFormData {
  firstName: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}
