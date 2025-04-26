
import { useState } from "react";
import { validateForm, FormValues, FormErrors } from "../lib/validation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  { value: "website", label: "Custom Website" },
  { value: "ecommerce", label: "E-Commerce Store" },
  { value: "webapp", label: "Web Application" },
  { value: "apidev", label: "API Development" },
  { value: "other", label: "Other" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    projectType: "default",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
    // Clear error when field is changed
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    
    // Validate single field on blur
    const fieldErrors = validateForm({
      ...values,
      [name]: values[name as keyof FormValues],
    });
    
    if (fieldErrors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: fieldErrors[name as keyof FormErrors] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = validateForm(values);
    setErrors(formErrors);
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);
    
    // If there are errors, don't submit
    if (Object.keys(formErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      // For now we'll just simulate a server request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you shortly.",
      });
      
      // Reset the form
      setValues({
        name: "",
        email: "",
        projectType: "default",
        description: "",
      });
      setTouched({});
      
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-agency-blue">Get In Touch</h2>
          <p>Ready to start your project? Contact us for a free quote</p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-agency-blue">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cn(
                      "w-full px-4 py-2 border rounded-lg focus:ring-agency-purple focus:border-agency-purple transition-colors",
                      errors.name && touched.name ? "border-red-500" : "border-gray-300"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && touched.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-agency-blue">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cn(
                      "w-full px-4 py-2 border rounded-lg focus:ring-agency-purple focus:border-agency-purple transition-colors",
                      errors.email && touched.email ? "border-red-500" : "border-gray-300"
                    )}
                    placeholder="your@email.com"
                  />
                  {errors.email && touched.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="projectType" className="block text-sm font-medium text-agency-blue">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={values.projectType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cn(
                      "w-full px-4 py-2 border rounded-lg focus:ring-agency-purple focus:border-agency-purple transition-colors appearance-none",
                      errors.projectType && touched.projectType ? "border-red-500" : "border-gray-300"
                    )}
                  >
                    <option value="default" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && touched.projectType && (
                    <p className="text-sm text-red-500">{errors.projectType}</p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-agency-blue">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    className={cn(
                      "w-full px-4 py-2 border rounded-lg focus:ring-agency-purple focus:border-agency-purple transition-colors",
                      errors.description && touched.description ? "border-red-500" : "border-gray-300"
                    )}
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                  {errors.description && touched.description && (
                    <p className="text-sm text-red-500">{errors.description}</p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full md:w-auto px-8 py-3 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
