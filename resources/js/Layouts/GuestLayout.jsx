import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-rose-100 px-4 py-10">

            {/* Decorative Background */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-pink-200 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-rose-200 opacity-40 blur-3xl"></div>

            {/* StudyMate Branding */}
            <div className="relative z-10 mb-8 text-center">
                <Link href="/" className="inline-flex flex-col items-center">
                    <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 text-4xl shadow-lg shadow-pink-200">
                        🎓
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight text-pink-600">
                        StudyMate
                    </h1>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                        Student Learning Management System
                    </p>
                </Link>

                <p className="mt-4 text-sm text-gray-600">
                    Learn smarter. Stay organized. Achieve more.
                </p>
            </div>

            {/* Login / Register Card */}
            <div className="relative z-10 w-full max-w-md rounded-3xl border border-pink-100 bg-white/95 p-6 shadow-2xl shadow-pink-100 sm:p-8">
                {children}
            </div>

            {/* Footer */}
            <footer className="relative z-10 mt-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} StudyMate. All rights reserved.
                <p className="mt-1">Your journey to success starts here.</p>
            </footer>
        </div>
    );
}