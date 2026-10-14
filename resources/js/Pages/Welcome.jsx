import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Welcome({ canLogin = true, canRegister = true }) {
    const { auth } = usePage().props;
    const user = auth?.user;

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <>
            <Head title="StudyMate" />

            <div className="min-h-screen bg-pink-50 text-gray-800">
                {/* Navigation */}
                <nav className="flex items-center justify-between px-6 py-5 md:px-16">
                    <a href="/" className="text-2xl font-bold text-pink-600">
                        StudyMate<span className="text-pink-400">.</span>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#home" className="hover:text-pink-500">
                            Home
                        </a>
                        <a href="#features" className="hover:text-pink-500">
                            Features
                        </a>
                        <a href="#about" className="hover:text-pink-500">
                            About
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        {user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="rounded-full border border-pink-300 px-5 py-2.5 font-semibold text-pink-600 transition hover:bg-pink-100"
                                >
                                    Dashboard
                                </Link>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="rounded-full bg-pink-500 px-5 py-2.5 font-semibold text-white transition hover:bg-pink-600"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                {canLogin && (
                                    <Link
                                        href="/login"
                                        className="rounded-full bg-pink-500 px-6 py-2.5 font-semibold text-white transition hover:bg-pink-600"
                                    >
                                        Log In
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <section
                    id="home"
                    className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24"
                >
                    <div>
                        <p className="mb-5 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
                            🎀 Your study journey starts here
                        </p>

                        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                            Study smarter,
                            <span className="block text-pink-500">
                                achieve more.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
                            Stay organized, manage your school tasks, and keep
                            track of your deadlines with StudyMate. Make
                            studying easier, one task at a time!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            {user ? (
                                <Link
                                    href="/dashboard"
                                    className="rounded-full bg-pink-500 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-1 hover:bg-pink-600"
                                >
                                    Go to Dashboard →
                                </Link>
                            ) : (
                                <>
                                    {canRegister && (
                                        <Link
                                            href="/register"
                                            className="rounded-full bg-pink-500 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-1 hover:bg-pink-600"
                                        >
                                            Get Started →
                                        </Link>
                                    )}

                                    <a
                                        href="#features"
                                        className="rounded-full border border-pink-300 bg-white px-7 py-3 font-semibold text-pink-600 transition hover:bg-pink-100"
                                    >
                                        Explore Features
                                    </a>
                                </>
                            )}
                        </div>

                        <p className="mt-6 text-sm text-gray-500">
                            ♡ Made for students, by students.
                        </p>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-pink-200 blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full bg-rose-200 blur-2xl" />

                        <div className="relative rounded-3xl border border-pink-100 bg-white p-6 shadow-xl shadow-pink-100 md:p-9">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Your Dashboard
                                    </p>
                                    <h3 className="mt-1 text-2xl font-bold">
                                        Hello, Student! 🌷
                                    </h3>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-2xl">
                                    📚
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-pink-50 p-5">
                                    <p className="text-sm text-gray-500">
                                        Total Tasks
                                    </p>
                                    <p className="mt-2 text-3xl font-bold text-pink-600">
                                        12
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">
                                        Stay on track!
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-rose-50 p-5">
                                    <p className="text-sm text-gray-500">
                                        Completed
                                    </p>
                                    <p className="mt-2 text-3xl font-bold text-rose-500">
                                        8
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">
                                        Great job! ✨
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="mb-3 flex items-center justify-between">
                                    <h4 className="font-bold">
                                        Upcoming Tasks
                                    </h4>

                                    {user ? (
                                        <Link
                                            href="/tasks"
                                            className="text-sm text-pink-500 hover:text-pink-700"
                                        >
                                            View all
                                        </Link>
                                    ) : (
                                        <a
                                            href="/login"
                                            className="text-sm text-pink-500 hover:text-pink-700"
                                        >
                                            View all
                                        </a>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 rounded-xl border border-pink-100 p-4">
                                        <span className="text-2xl">📝</span>
                                        <div className="flex-1">
                                            <p className="font-semibold">
                                                Math Assignment
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Due tomorrow
                                            </p>
                                        </div>
                                        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-600">
                                            Pending
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl border border-pink-100 p-4">
                                        <span className="text-2xl">🔬</span>
                                        <div className="flex-1">
                                            <p className="font-semibold">
                                                Science Review
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Due Friday
                                            </p>
                                        </div>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
                                            Done
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section
                    id="features"
                    className="bg-white px-6 py-20 md:px-16"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="font-semibold text-pink-500">
                                WHAT YOU CAN DO
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                Everything you need to study better
                            </h2>

                            <p className="mt-4 leading-7 text-gray-600">
                                Keep your school life organized with simple
                                tools designed for students.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            <div className="rounded-3xl bg-pink-50 p-8 transition hover:-translate-y-2">
                                <div className="text-4xl">📋</div>
                                <h3 className="mt-5 text-xl font-bold">
                                    Task Management
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    Organize your assignments and keep track of
                                    the tasks you need to finish.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-rose-50 p-8 transition hover:-translate-y-2">
                                <div className="text-4xl">📅</div>
                                <h3 className="mt-5 text-xl font-bold">
                                    Deadline Tracker
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    Remember important deadlines and plan your
                                    schoolwork ahead of time.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-fuchsia-50 p-8 transition hover:-translate-y-2">
                                <div className="text-4xl">📖</div>
                                <h3 className="mt-5 text-xl font-bold">
                                    Study Planner
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    Create a study routine and make time for the
                                    subjects that matter.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section
                    id="about"
                    className="px-6 py-20 md:px-16"
                >
                    <div className="mx-auto max-w-4xl rounded-3xl bg-pink-100 px-6 py-12 text-center md:px-16">
                        <div className="text-4xl">🌸</div>

                        <h2 className="mt-4 text-3xl font-extrabold">
                            Make every study session count.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                            StudyMate helps students manage their academic
                            responsibilities in one organized space, so they
                            can focus on learning and reaching their goals.
                        </p>

                        {!user && canRegister && (
                            <Link
                                href="/register"
                                className="mt-7 inline-block rounded-full bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600"
                            >
                                Start Your Journey ♡
                            </Link>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-pink-100 bg-white px-6 py-6 text-center text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} StudyMate. Made with ♡
                        for students.
                    </p>
                </footer>
            </div>
        </>
    );
}
