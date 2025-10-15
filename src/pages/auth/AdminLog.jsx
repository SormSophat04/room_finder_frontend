import React, { useState } from 'react';

// --- SVG Icons for a polished UI without external dependencies ---

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243l-4.243-4.243z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.293 11.293l1.414 1.414m5.25-5.25l-1.414-1.414M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
);

const LogoIcon = () => (
    <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 12.33L19.2 8.5L12 4.67L4.8 8.5L12 12.33ZM4 9.67V16.33L11 20.17V13.5L4 9.67ZM13 13.5V20.17L20 16.33V9.67L13 13.5Z" />
    </svg>
);

function AdminLog() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Both email and password are required.');
            return;
        }

        console.log('Attempting login with:', { email, password });

        if (email === "admin@example.com" && password === "password") {
            console.log("Login Successful!");
            // In a real app, you would redirect or update the app's state here
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 font-sans text-gray-300">
            <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl shadow-blue-500/10">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                        <LogoIcon />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Admin Login</h1>
                    <p className="mt-2 text-gray-400">Securely sign in to your dashboard.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    {error && (
                        <div className="mb-4 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-center text-sm font-medium text-red-400">
                            {error}
                        </div>
                    )}

                    <div className="relative mb-4">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <UserIcon />
                        </span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-gray-600 bg-gray-700 py-3 pl-10 pr-4 text-gray-200 transition duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            placeholder="Email Address"
                            required
                        />
                    </div>

                    <div className="relative mb-6">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockIcon />
                        </span>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-lg border border-gray-600 bg-gray-700 py-3 pl-10 pr-10 text-gray-200 transition duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            placeholder="Password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="group absolute inset-y-0 right-0 flex items-center rounded-r-lg px-3"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                    </div>

                    <div className="mb-6 flex items-center justify-end">
                        <a href="#" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition duration-300 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLog;


