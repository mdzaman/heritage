import { useState } from 'react';
import { 
  Mail, 
  Lock, 
  LogIn, 
  Shield, 
  Copy, 
  KeyRound, 
  AlertCircle, 
  CheckCircle2, 
  Smartphone,
  ExternalLink,
  Send,
  MessageSquare,
  Key,
  User
} from 'lucide-react';

export default function AuthMFAComponent() {
  const [activeTab, setActiveTab] = useState('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleTabChange = (tab) => {
    setError('');
    setSuccess('');
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => handleTabChange('login')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'login'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => handleTabChange('mfa')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'mfa'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Two-Factor Auth
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <div className="flex items-center p-4 bg-red-50 rounded-lg text-red-700">
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        {success && (
          <div className="flex items-center p-4 bg-green-50 rounded-lg text-green-700">
            <CheckCircle2 className="h-5 w-5 mr-2" />
            {success}
          </div>
        )}

        {/* Content */}
        {activeTab === 'login' && <LoginContent setError={setError} setSuccess={setSuccess} />}
        {activeTab === 'mfa' && <MFAContent setError={setError} setSuccess={setSuccess} />}
      </div>
    </div>
  );
}

function LoginContent({ setError, setSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      setSuccess('Login successful!');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <LogIn className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email address"
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>

        <div className="flex items-center justify-center">
          <span className="text-gray-500 text-sm">Sign in with</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <SocialButton icon="google" />
          <SocialButton icon="github" />
          <SocialButton icon="apple" />
        </div>
      </form>
    </div>
  );
}

function MFAContent({ setError, setSuccess }) {
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerifyCode = () => {
    if (verificationCode === '123456') {
      setSuccess('MFA setup complete!');
      setStep(step + 1);
    } else {
      setError('Invalid verification code');
    }
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setSuccess('Copied to clipboard!');
  };

  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Enable Two-Factor Auth</h2>
          <p className="mt-2 text-sm text-gray-600">Enhance your account security</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <p className="text-sm text-gray-700">
            Scan the QR code with your authenticator app:
          </p>
          <div className="flex justify-center">
            <img src="/api/placeholder/200/200" alt="QR Code" className="w-48 h-48" />
          </div>
          <div className="flex items-center justify-between bg-white rounded p-2">
            <code className="text-sm">ABCD-EFGH-IJKL-MNOP</code>
            <button onClick={() => handleCopyText('ABCD-EFGH-IJKL-MNOP')}>
              <Copy className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter verification code
          </label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter 6-digit code"
          />
        </div>

        <button
          onClick={handleVerifyCode}
          className="w-full py-2 px-4 border border-transparent rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Verify and Enable
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">2FA is Enabled</h2>
        <p className="mt-2 text-sm text-gray-600">Your account is now more secure</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Backup Codes</h3>
        <p className="text-sm text-gray-600 mb-4">
          Save these backup codes in a secure place. You can use them to sign in if you lose access
          to your authenticator app.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {['ABC123', 'DEF456', 'GHI789', 'JKL012'].map((code, index) => (
            <div key={index} className="bg-white p-2 rounded text-center font-mono text-sm">
              {code}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => handleCopyText('ABC123\nDEF456\nGHI789\nJKL012')}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
      >
        <div className="flex items-center justify-center">
          <Copy className="h-4 w-4 mr-2" />
          Copy Backup Codes
        </div>
      </button>
    </div>
  );
}

function SocialButton({ icon }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <ExternalLink className="h-5 w-5 text-gray-500" />
    </button>
  );
}
