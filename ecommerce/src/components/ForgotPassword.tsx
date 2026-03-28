import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from './Header'
import Footer from './Footer'

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) return;
    
    setIsLoading(true);
    

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setCountdown(30);
    

    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResend = async () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setCountdown(30);
    
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Reset Password</h2>
        <p className="PSizeText">We'll help you recover your account</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-md mx-auto">
      
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 transition-all duration-300">
            
            {!isSubmitted ? (
              <>
              
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <h1 className="font-serif text-3xl font-bold mb-2">Forgot Password?</h1>
                  <p className="text-gray-600">
                    No worries! Enter your email and we'll send you reset instructions.
                  </p>
                </div>

             
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border ${
                          error ? 'border-red-500' : 'border-gray-300'
                        } rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {error && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                      </p>
                    )}
                  </div>

              
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-blue-800">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                      </p>
                    </div>
                  </div>

              
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-6 btn21 text-white rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Reset Link
                      </>
                    )}
                  </button>
                </form>

          
                <div className="mt-8 text-center">
                  <Link 
                    to="/signin" 
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Sign In
                  </Link>
                </div>
              </>
            ) : (
              <>
            
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h1 className="font-serif text-3xl font-bold mb-2">Check Your Email</h1>
                  <p className="text-gray-600">
                    We've sent password reset instructions to<br/>
                    <span className="font-medium text-primary">{email}</span>
                  </p>
                </div>

          
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-serif text-lg font-bold mb-4 text-center">Next Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <p className="text-sm text-gray-600 text-left">
                        Check your inbox for an email from us
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <p className="text-sm text-gray-600 text-left">
                        Click the reset link in the email
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <p className="text-sm text-gray-600 text-left">
                        Create a new secure password
                      </p>
                    </div>
                  </div>
                </div>

            
                <button
                  onClick={handleResend}
                  disabled={isLoading || countdown > 0}
                  className="w-full py-3 px-6 btn21 text-white rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : countdown > 0 ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Resend in {countdown}s
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Resend Email
                    </>
                  )}
                </button>

              
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">Didn't receive the email?</p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">
                      • Check your spam or junk folder
                    </p>
                    <p className="text-xs text-gray-400">
                      • Make sure you entered the correct email
                    </p>
                  </div>
                </div>

                
                <div className="mt-8 text-center">
                  <Link 
                    to="/signin" 
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Sign In
                  </Link>
                </div>
              </>
            )}
          </div>

        
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <Link to="/support" className="text-primary font-medium hover:underline">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
