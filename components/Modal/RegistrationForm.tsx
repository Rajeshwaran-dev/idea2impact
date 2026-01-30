'use client'
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack";

/* =======================
   Types
======================= */

interface RegistrationFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  college: string;
  year: string;
  department: string;
  teamSize: string;
  experience: string;
  skills: string;
  motivation: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

/* =======================
   Component
======================= */

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    college: "",
    year: "",
    department: "",
    teamSize: "",
    experience: "",
    skills: "",
    motivation: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  /* =======================
     Validation
  ======================= */

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phone = formData.phone.replace(/\s+/g, "");
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.countryCode) {
      newErrors.countryCode = "Country code is required";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College/Institution is required";
    }

    if (!formData.year) {
      newErrors.year = "Year of study is required";
    }

    if (!formData.department) {
      newErrors.department = "Department/Stream is required";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Team size is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* =======================
     Handlers
  ======================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      enqueueSnackbar("Please fix the errors in the form", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      enqueueSnackbar("Submitting registration...", {
        variant: "info",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 2000,
      });

      const response = await fetch(`api/registration`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }

      enqueueSnackbar("Registration successful!", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 3000,
      });

      setIsSubmitted(true);

      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            college: "",
            year: "",
            department: "",
            teamSize: "",
            experience: "",
            skills: "",
            motivation: "",
          });
          setErrors({});
        }, 300);
      }, 4000);
    } catch (error) {
      console.error("Registration error:", error);

      enqueueSnackbar("Registration failed. Please try again.", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        autoHideDuration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =======================
     Helpers
  ======================= */

  const getInputClassName = (field: keyof FormData) =>
    `form-input ${errors[field] ? "input-error" : ""}`;

  const getSelectClassName = (field: keyof FormData) =>
    `form-select ${errors[field] ? "select-error" : ""}`;

  const getTextareaClassName = (field: keyof FormData) =>
    `form-textarea ${errors[field] ? "textarea-error" : ""}`;

  /* =======================
     UI
  ======================= */

  if (isSubmitted) {
    return (
      <div className="success-message active">
        <div className="success-icon">
          <Icon icon="lucide:check-circle" />
        </div>
        <h3>Registration Successful!</h3>
        <p>
          {`Thank you for registering for Idea2Impact 2026! We can't wait to see
          what you build!`}
        </p>
      </div>
    );
  }

  return (
    <form id="registrationForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Full Name <span>*</span>
        </label>
        <input
          className={getInputClassName('name')}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email Address <span>*</span>
        </label>
        <input
          className={getInputClassName('email')}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">
          Phone Number <span>*</span>
        </label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select
            className={getSelectClassName('countryCode')}
            style={{ width: '100px' }}
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          >
            <option value="+91">+91 (IN)</option>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+971">+971 (UAE)</option>
            <option value="+65">+65 (SG)</option>
            <option value="+61">+61 (AU)</option>
          </select>
          <div style={{ flex: 1 }}>
            <input
              className={getInputClassName('phone')}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              maxLength={10}
            />
          </div>
        </div>
        {(errors.phone || errors.countryCode) && (
          <span className="error-message">{errors.phone || errors.countryCode}</span>
        )}
        <small className="input-hint">Select country code and enter 10-digit mobile number</small>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="college">
          College/Institution <span>*</span>
        </label>
        <input
          className={getInputClassName('college')}
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          placeholder="Your college name"
        />
        {errors.college && <span className="error-message">{errors.college}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="year">
          Year of Study <span>*</span>
        </label>
        <select
          className={getSelectClassName('year')}
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="">Select your year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="graduate">Graduate</option>
          <option value="other">Other</option>
        </select>
        {errors.year && <span className="error-message">{errors.year}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="department">
          Department/Stream <span>*</span>
        </label>
        <select
          className={getSelectClassName('department')}
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select your department</option>
          <option value="cse">Computer Science & Engineering</option>
          <option value="it">Information Technology</option>
          <option value="ece">Electronics & Communication</option>
          <option value="eee">Electrical & Electronics</option>
          <option value="mech">Mechanical Engineering</option>
          <option value="civil">Civil Engineering</option>
          <option value="aids">AI & Data Science</option>
          <option value="other">Other</option>
        </select>
        {errors.department && <span className="error-message">{errors.department}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="team-size">
          Team Size <span>*</span>
        </label>
        <select
          className={getSelectClassName('teamSize')}
          id="team-size"
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
        >
          <option value="">Select team size</option>
          <option value="1">Solo (1 member)</option>
          <option value="2">2 members</option>
          <option value="3">3 members</option>
          <option value="4">4 members</option>
        </select>
        {errors.teamSize && <span className="error-message">{errors.teamSize}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="experience">
          Prior Hackathon Experience
        </label>
        <select
          className={getSelectClassName('experience')}
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        >
          <option value="">Select experience level</option>
          <option value="none">No experience (First hackathon!)</option>
          <option value="beginner">1-2 hackathons</option>
          <option value="intermediate">3-5 hackathons</option>
          <option value="advanced">5+ hackathons</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="skills">
          Technical Skills (Optional)
        </label>
        <input
          className={getInputClassName('skills')}
          type="text"
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="e.g., Python, React, Machine Learning, etc."
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="motivation">
          Why do you want to participate? (Optional)
        </label>
        <textarea
          className={getTextareaClassName('motivation')}
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          placeholder="Tell us what excites you about Idea2Impact..."
        />
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Complete Registration'}
      </button>
    </form>
  );
};

export default RegistrationForm;
