import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({ task }) {
    const { data, setData, put, processing, errors } = useForm({
        title: task.title || '',
        description: task.description || '',
        due_date: task.due_date
            ? String(task.due_date).slice(0, 10)
            : '',
        status: task.status || 'pending',
    });

    function submit(e) {
        e.preventDefault();
        put('/tasks/' + task.id);
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold text-pink-600">
                    Edit Study Task 🌸
                </h2>
            }
        >
            <Head title="Edit Task | StudyMate" />

            <div className="min-h-screen bg-pink-50 py-8">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <Link
                            href="/tasks"
                            className="text-sm font-medium text-pink-600 hover:underline"
                        >
                            ← Back to Tasks
                        </Link>

                        <h1 className="mt-4 text-2xl font-bold text-gray-800">
                            Edit Your Task ✏️
                        </h1>

                        <form onSubmit={submit} className="mt-6 space-y-5">
                            <div>
                                <label className="mb-1 block font-medium">
                                    Task Title *
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full rounded-xl border border-pink-200 px-4 py-3"
                                    required
                                />
                                {errors.title && (
                                    <p className="text-sm text-red-500">{errors.title}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block font-medium">
                                    Description
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full rounded-xl border border-pink-200 px-4 py-3"
                                    rows="3"
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-500">{errors.description}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block font-medium">
                                    Due Date
                                </label>
                                <input
                                    type="date"
                                    value={data.due_date}
                                    onChange={(e) => setData('due_date', e.target.value)}
                                    className="w-full rounded-xl border border-pink-200 px-4 py-3"
                                />
                                {errors.due_date && (
                                    <p className="text-sm text-red-500">{errors.due_date}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block font-medium">
                                    Status
                                </label>
                                <select
                                    value={data.status}
                                    onChange={(e) => setData('status', e.target.value)}
                                    className="w-full rounded-xl border border-pink-200 px-4 py-3"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600 disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Save Changes'}
                            </button>

                            <Link
                                href="/tasks"
                                className="ml-3 inline-block text-gray-600 hover:underline"
                            >
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}