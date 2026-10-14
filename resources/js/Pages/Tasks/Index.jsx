import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';

export default function Index({ tasks = [] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        due_date: '',
        status: 'pending',
    });

    function submit(e) {
        e.preventDefault();

        post('/tasks', {
            onSuccess: () => reset(),
        });
    }

    function deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            router.delete('/tasks/' + id);
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold text-pink-600">
                    My Study Tasks 🌸
                </h2>
            }
        >
            <Head title="My Tasks | StudyMate" />

            <div className="min-h-screen bg-pink-50 py-8">
                <div className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium text-pink-600 hover:underline"
                        >
                            ← Back to Dashboard
                        </Link>

                        <h1 className="mt-4 text-2xl font-bold text-gray-800">
                            Manage Your Tasks 📚
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Add your assignments, deadlines, and study activities.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-pink-600">
                            Add a New Task
                        </h2>

                        <form onSubmit={submit} className="mt-5 space-y-4">
                            <div>
                                <label className="mb-1 block font-medium text-gray-700">
                                    Task Title *
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full rounded-xl border border-pink-200 px-4 py-3 focus:border-pink-400 focus:outline-none"
                                    placeholder="e.g. Math Assignment"
                                    required
                                />
                                {errors.title && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full rounded-xl border border-pink-200 px-4 py-3 focus:border-pink-400 focus:outline-none"
                                    placeholder="Add some details (optional)"
                                    rows="3"
                                />
                                {errors.description && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block font-medium text-gray-700">
                                        Due Date
                                    </label>
                                    <input
                                        type="date"
                                        value={data.due_date}
                                        onChange={(e) => setData('due_date', e.target.value)}
                                        className="w-full rounded-xl border border-pink-200 px-4 py-3 focus:border-pink-400 focus:outline-none"
                                    />
                                    {errors.due_date && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.due_date}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-1 block font-medium text-gray-700">
                                        Status
                                    </label>
                                    <select
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="w-full rounded-xl border border-pink-200 px-4 py-3 focus:border-pink-400 focus:outline-none"
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600 disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Add Task +'}
                            </button>
                        </form>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800">
                            Your Tasks ({tasks.length})
                        </h2>

                        {tasks.length === 0 ? (
                            <p className="mt-5 rounded-xl bg-pink-50 p-5 text-gray-600">
                                No tasks yet. Add your first study task above! 🌷
                            </p>
                        ) : (
                            <div className="mt-5 space-y-4">
                                {tasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="rounded-xl border border-pink-100 p-5"
                                    >
                                        <div className="flex flex-col justify-between gap-3 sm:flex-row">
                                            <div className="min-w-0">
                                                <h3 className="break-words text-lg font-bold text-gray-800">
                                                    {task.title}
                                                </h3>

                                                {task.description && (
                                                    <p className="mt-1 whitespace-pre-wrap break-words text-gray-600">
                                                        {task.description}
                                                    </p>
                                                )}

                                                <p className="mt-2 text-sm text-gray-500">
                                                    Due date: {task.due_date || 'Not set'}
                                                </p>

                                                <span
                                                    className={
                                                        'mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ' +
                                                        (task.status === 'completed'
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-orange-100 text-orange-700')
                                                    }
                                                >
                                                    {task.status === 'completed'
                                                        ? 'Completed'
                                                        : 'Pending'}
                                                </span>
                                            </div>

                                            <div className="flex shrink-0 items-start gap-2">
                                                <Link
                                                    href={'/tasks/' + task.id + '/edit'}
                                                    className="rounded-lg bg-pink-100 px-4 py-2 font-medium text-pink-700 hover:bg-pink-200"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    type="button"
                                                    onClick={() => deleteTask(task.id)}
                                                    className="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-700 hover:bg-red-200"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}