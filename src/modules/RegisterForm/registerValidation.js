const registerValidationRules = {
  name: {
    required: "Name is required",
    minLength: {
      value: 5,
      message: "Name must be at least 5 characters",
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Name cannot contain numbers or special characters",
    }
  },
  phone: {
    required: "Phone number is required",
    pattern: {
      value: /^\+?[0-9\s\-()]{7,20}$/,
      message: "Please enter a valid phone number",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },
};

export default registerValidationRules;
