
import React, { useState } from 'react';
import { ChevronRight, Briefcase, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import EducationBackground from '../components/EducationBackground';
import { useNavigate } from 'react-router-dom';

interface FormData {
  occupation: string;
  jobRole: string;
  experience: string;
}

const occupations = [
  'Technology & Software',
  'Healthcare & Medicine',
  'Education & Training',
  'Business & Finance',
  'Engineering & Manufacturing',
  'Marketing & Sales',
  'Design & Creative',
  'Legal & Compliance',
  'Research & Development',
  'Customer Service',
  'Operations & Logistics',
  'Student',
  'Other'
];

const jobRolesByOccupation: Record<string, string[]> = {
  'Technology & Software': ['Software Developer', 'Data Scientist', 'UI/UX Designer', 'DevOps Engineer', 'Product Manager', 'QA Engineer', 'Systems Administrator'],
  'Healthcare & Medicine': ['Doctor', 'Nurse', 'Pharmacist', 'Medical Technician', 'Healthcare Administrator', 'Physical Therapist', 'Medical Researcher'],
  'Education & Training': ['Teacher', 'Professor', 'Training Coordinator', 'Educational Consultant', 'Curriculum Developer', 'Academic Administrator'],
  'Business & Finance': ['Financial Analyst', 'Accountant', 'Business Analyst', 'Project Manager', 'Consultant', 'Investment Advisor', 'Operations Manager'],
  'Engineering & Manufacturing': ['Mechanical Engineer', 'Electrical Engineer', 'Civil Engineer', 'Manufacturing Engineer', 'Quality Engineer', 'Process Engineer'],
  'Marketing & Sales': ['Marketing Manager', 'Sales Representative', 'Digital Marketer', 'Content Creator', 'Brand Manager', 'Sales Manager'],
  'Design & Creative': ['Graphic Designer', 'Web Designer', 'Art Director', 'Creative Director', 'Illustrator', 'Photographer'],
  'Legal & Compliance': ['Lawyer', 'Legal Assistant', 'Compliance Officer', 'Paralegal', 'Legal Consultant'],
  'Research & Development': ['Research Scientist', 'Lab Technician', 'R&D Manager', 'Product Developer', 'Research Analyst'],
  'Customer Service': ['Customer Support Representative', 'Customer Success Manager', 'Technical Support', 'Call Center Agent'],
  'Operations & Logistics': ['Operations Manager', 'Supply Chain Analyst', 'Logistics Coordinator', 'Warehouse Manager'],
  'Student': ['High School Student', 'Undergraduate Student', 'Graduate Student', 'PhD Candidate'],
  'Other': ['Freelancer', 'Entrepreneur', 'Retired', 'Job Seeker', 'Career Changer']
};

const experienceLevels = [
  { value: 'entry', label: 'Entry Level (0-2 years)' },
  { value: 'mid', label: 'Mid Level (2-5 years)' },
  { value: 'senior', label: 'Senior Level (5-10 years)' },
  { value: 'expert', label: 'Expert Level (10+ years)' },
  { value: 'student', label: 'Student/No Experience' }
];

export default function OccupationSelection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    occupation: '',
    jobRole: '',
    experience: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOccupationChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      occupation: value,
      jobRole: '' // Reset job role when occupation changes
    }));
  };

  const handleJobRoleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      jobRole: value
    }));
  };

  const handleExperienceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.occupation || !formData.jobRole || !formData.experience) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    
    // For now, just show success - in real app, would navigate to dashboard
    alert('Profile setup complete! Welcome to AI Tutor.');
  };

  const isFormValid = formData.occupation && formData.jobRole && formData.experience;
  const availableJobRoles = formData.occupation ? jobRolesByOccupation[formData.occupation] || [] : [];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <EducationBackground />

      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 p-4 rounded-2xl shadow-2xl animate-pulse">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
              Tell us about yourself
            </h1>
            <p className="text-slate-200 text-lg font-medium drop-shadow-md">
              Help us personalize your learning experience
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step indicator */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-slate-300 text-sm">Account Created</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-white text-sm font-medium">Profile Setup</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-500 flex items-center justify-center">
                    <span className="text-slate-400 text-xs">3</span>
                  </div>
                  <span className="text-slate-400 text-sm">Dashboard</span>
                </div>
              </div>

              {/* Occupation Selection */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-slate-100 mb-3">
                  What's your field of work or study?
                </label>
                <Select value={formData.occupation} onValueChange={handleOccupationChange}>
                  <SelectTrigger className="w-full h-14 bg-slate-900/50 backdrop-blur-sm border-slate-600 text-white hover:bg-slate-900/70 transition-all duration-200">
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-slate-400 mr-3" />
                      <SelectValue placeholder="Select your occupation field" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {occupations.map((occupation) => (
                      <SelectItem 
                        key={occupation} 
                        value={occupation}
                        className="text-white hover:bg-slate-700 focus:bg-slate-700"
                      >
                        {occupation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Job Role Selection */}
              {formData.occupation && (
                <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                  <label className="block text-lg font-semibold text-slate-100 mb-3">
                    What's your current role?
                  </label>
                  <Select value={formData.jobRole} onValueChange={handleJobRoleChange}>
                    <SelectTrigger className="w-full h-14 bg-slate-900/50 backdrop-blur-sm border-slate-600 text-white hover:bg-slate-900/70 transition-all duration-200">
                      <div className="flex items-center">
                        <User className="w-5 h-5 text-slate-400 mr-3" />
                        <SelectValue placeholder="Select your job role" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {availableJobRoles.map((role) => (
                        <SelectItem 
                          key={role} 
                          value={role}
                          className="text-white hover:bg-slate-700 focus:bg-slate-700"
                        >
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Experience Level Selection */}
              {formData.jobRole && (
                <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                  <label className="block text-lg font-semibold text-slate-100 mb-4">
                    What's your experience level?
                  </label>
                  <RadioGroup 
                    value={formData.experience} 
                    onValueChange={handleExperienceChange}
                    className="space-y-3"
                  >
                    {experienceLevels.map((level) => (
                      <div key={level.value} className="flex items-center space-x-3 p-4 rounded-xl bg-slate-900/30 border border-slate-700/50 hover:bg-slate-900/50 transition-all duration-200 cursor-pointer">
                        <RadioGroupItem 
                          value={level.value} 
                          id={level.value}
                          className="border-slate-500 text-cyan-500"
                        />
                        <Label 
                          htmlFor={level.value} 
                          className="text-slate-200 font-medium cursor-pointer flex-1"
                        >
                          {level.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className="w-full h-14 bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-700 text-white font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Setting up your profile...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Continue to Dashboard
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Skip Option */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/')}
              className="text-slate-400 hover:text-slate-300 transition-colors text-sm font-medium"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
