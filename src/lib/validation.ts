
export interface FormValues {
  name: string;
  email: string;
  projectType: string;
  description: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  description?: string;
}

export const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!values.projectType || values.projectType === "default") {
    errors.projectType = "Please select a project type";
  }

  if (!values.description.trim()) {
    errors.description = "Project description is required";
  } else if (values.description.length < 10) {
    errors.description = "Description must be at least 10 characters";
  }

  return errors;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
