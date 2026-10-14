import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-pink-50">
            <nav className="border-b border-pink-100 bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex items-center gap-2">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-pink-500" />
                                <span className="text-lg font-bold text-pink-600">
                                    StudyMate
                                </span>
                            </Link>

                            <div className="hidden items-center gap-6 sm:flex">
                                <NavLink
                                    href="/"
                                    active={route().current('welcome')}
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    href="/tasks"
                                    active={route().current('tasks.*')}
                                >
                                    My Tasks
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden items-center sm:flex">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-xl border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700 transition hover:bg-pink-100 focus:outline-none"
                                    >
                                        {user.name}
                                        <svg
                                            className="ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>
                                        My Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>

                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="rounded-xl p-2 text-pink-600 hover:bg-pink-100 focus:outline-none"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {showingNavigationDropdown ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {showingNavigationDropdown && (
                    <div className="space-y-1 border-t border-pink-100 bg-white px-4 py-3 sm:hidden">
                        <ResponsiveNavLink href="/">
                            Home
                        </ResponsiveNavLink>

                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>

                        <ResponsiveNavLink
                            href="/tasks"
                            active={route().current('tasks.*')}
                        >
                            My Tasks
                        </ResponsiveNavLink>

                        <ResponsiveNavLink href={route('profile.edit')}>
                            My Profile
                        </ResponsiveNavLink>

                        <ResponsiveNavLink
                            method="post"
                            href={route('logout')}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                )}
            </nav>

            {header && (
                <header className="border-b border-pink-100 bg-white">
                    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}