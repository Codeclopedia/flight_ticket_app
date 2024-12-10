"use client"

// pages/signup.tsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isValid } from 'date-fns';
import { Divider } from '@material-ui/core';
import { SocialMediaLogin } from '@/components/sign_In_Component';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  age: number | '';
  country: string;
  city: string;
  dob: Date | null;
  gender: 'male' | 'female' | 'other' | '';
  useForFutureBookings: boolean;
}

const initialFormData: SignUpFormData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  address: '',
  age: '',
  country: '',
  city: '',
  dob: null,
  gender: '',
  useForFutureBookings: false,
};

const FormField: React.FC<{
  id: string;
  name: string;
  type: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  label: string;
  error?: string;
  options?: { value: string; label: string }[];
}> = ({ id, name, type, value, onChange, placeholder, label, error, options }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    {type === 'select' ? (
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="">Select {label}</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
    )}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, ariaChecked } = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? ariaChecked : value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      dob: date,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof SignUpFormData, string>> = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.address) newErrors.address = 'Address is required';
    if (formData.age === '' || formData.age === undefined) newErrors.age = 'Age is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.dob || !isValid(formData.dob)) newErrors.dob = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form Submitted', {
        ...formData,
        dob: formData.dob ? format(formData.dob, 'yyyy-MM-dd') : '',
      });
      // Typically, you would send data to your API here
    }
  };

  return (
    <div className="flex py-10 px-10 items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-500 shadow shadow-lg">
      <div className="bg-white p-8 rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold mb-1 text-center">Sign Up for Your Flight Booking</h1>
        <h3 className="flex justify-center gap-1 text-sm font-bold mb-6 text-center text-blue-500">Already have Account? <h3 className='underline'> Login</h3></h3>
        <form onSubmit={handleSubmit}>
          <FormField
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            label="Full Name"
            error={errors.name}
          />
          <FormField
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            label="Email"
            error={errors.email}
          />
          <FormField
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            label="Password"
            error={errors.password}
          />
          <FormField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            label="Confirm Password"
            error={errors.confirmPassword}
          />
          <FormField
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your current address"
            label="Current Address"
            error={errors.address}
          />
          <FormField
            id="age"
            name="age"
            type="number"
            value={formData.age === '' ? '' : formData.age}  // Ensure value is consistent with type
            onChange={handleChange}
            placeholder="Enter your age"
            label="Age"
            error={errors.age}
          />
          <FormField
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter your country"
            label="Country"
            error={errors.country}
          />
          <FormField
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            label="City"
            error={errors.city}
          />
          <CustomDatePicker errors={errors} formData={formData} handleDateChange={handleDateChange} />
          <FormField
            id="gender"
            name="gender"
            type="select"
            value={formData.gender}
            onChange={handleChange}
            label="Gender"
            error={errors.gender}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
          />
          <UseForFutureMarkUpBox formData={formData} handleChange={handleChange} />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <div className="p-1"></div>
        <Divider />
        <SocialMediaLogin title="Google" icon={faGoogle} isLogin={false} />
        <SocialMediaLogin title="Facebook" icon={faFacebook} isLogin={false} />
        <div className="flex flex-row justify-center gap-1 px-1 pt-10">Go back to <Link className='underline font-bold' href="/" >Dashboard</Link></div>
      </div>
    </div>
  );
};
function CustomDatePicker({ formData, handleDateChange, errors }: { formData: SignUpFormData, handleDateChange: (date: Date | null) => void, errors: Partial<Record<keyof SignUpFormData, string>> }) {
  return <div className="mb-4">
    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
    <DatePicker
      id="dob"
      name="dob"
      placeholderText='yyyy-MM-dd'
      selected={formData.dob}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
  </div>
}

function UseForFutureMarkUpBox({ formData, handleChange }: { formData: SignUpFormData, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) {
  return <div className="mb-4">
    <label htmlFor="useForFutureBookings" className="inline-flex items-center">
      <input
        type="checkbox"
        id="useForFutureBookings"
        name="useForFutureBookings"
        checked={formData.useForFutureBookings}
        onChange={handleChange}
        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
      />
      <span className="ml-2 text-sm text-gray-700">Use this information for future bookings</span>
    </label>
  </div>
}

export default Signup;
