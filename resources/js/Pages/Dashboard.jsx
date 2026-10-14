import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({
    totalTasks = 0,
    completedTasks = 0,
    pendingTasks = 0,
    upcomingTasks = [],
}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold text-pink-600">
                    StudyMate Dashboard 🌸
                </h2>
            }
        >
            <Head title="StudyMate Dashboard" />

            <div className="min-h-screen bg-pink-50 py-10">
                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl bg-white p-8 shadow-sm">
                        <p className="font-medium text-pink-500">
                            YOUR STUDY SPACE
                        </p>

                        <h1 className="mt-2 text-3xl font-extrabold text-gray-800">
                            Welcome back! 🌷
                        </h1>

                        <p className="mt-3 text-gray-600">
                            Stay organized, manage your tasks, and make every
                            study session count.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">Total Tasks</p>
                            <h3 className="mt-3 text-4xl font-bold text-pink-600">
                                {totalTasks}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                                All your recorded tasks.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">
                                Completed Tasks
                            </p>
                            <h3 className="mt-3 text-4xl font-bold text-green-500">
                                {completedTasks}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Great job! ✨
                            </p>
                        </div>

                        <div className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
                            <p className="text-sm text-gray-500">
                                Pending Tasks
                            </p>
                            <h3 className="mt-3 text-4xl font-bold text-orange-500">
                                {pendingTasks}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                                One step at a time.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800">
                            Quick Actions
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Choose what you want to work on today.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <Link
                                href="/tasks"
                                className="rounded-2xl bg-pink-500 p-6 text-white transition hover:bg-pink-600"
                            >
                                <span className="text-3xl">📚</span>
                                <h3 className="mt-3 text-lg font-bold">
                                    Manage Tasks
                                </h3>
                                <p className="mt-1 text-sm text-pink-50">
                                    View, add, edit, and delete study tasks.
                                </p>
                            </Link>

                            <Link
                                href="/profile"
                                className="rounded-2xl border border-pink-200 bg-pink-50 p-6 transition hover:bg-pink-100"
                            >
                                <span className="text-3xl">👤</span>
                                <h3 className="mt-3 text-lg font-bold text-gray-800">
                                    My Profile
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Update your account information.
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800">
                            Upcoming Tasks 🗓️
                        </h2>

                        {upcomingTasks.length === 0 ? (
                            <p className="mt-4 text-gray-500">
                                No upcoming tasks yet. Add one to get started!
                            </p>
                        ) : (
                            <div className="mt-4 space-y-3">
                                {upcomingTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="flex flex-col justify-between gap-2 rounded-xl border border-pink-100 bg-pink-50 p-4 sm:flex-row sm:items-center"
                                    >
                                        <div>
                                            <h3 className="font-semibold text-gray-800">
                                                {task.title}
                                            </h3>

                                            {task.description && (
                                                <p className="mt-1 text-sm text-gray-600">
                                                    {task.description}
                                                </p>
                                            )}
                                        </div>

                                        <span className="text-sm font-medium text-pink-600">
                                            {task.due_date}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="rounded-2xl border border-pink-200 bg-pink-100 p-6">
                        <h3 className="font-bold text-pink-700">
                            🌸 A Little Reminder
                        </h3>
                        <p className="mt-2 text-pink-800">
                            Small progress is still progress. Keep learning
                            and believe in yourself!
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}