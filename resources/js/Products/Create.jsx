
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        sku: '',
        category: '',
        description: '',
        price: '',
        stock: 0,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/products');
    }

    const inputClass =
        'w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100';

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold text-pink-700">
                    Add Product
                </h2>
            }
        >
            <Head title="Add Product" />

            <div className="min-h-screen bg-pink-50 px-4 py-10">
                <div className="mx-auto max-w-3xl">
                    <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-lg shadow-pink-100 sm:p-9">
                        <div className="mb-8">
                            <p className="text-sm font-semibold text-pink-500">
                                PRODUCT MANAGEMENT
                            </p>
                            <h1 className="mt-2 text-3xl font-bold text-gray-800">
                                Add New Product 🌸
                            </h1>
                            <p className="mt-2 text-gray-500">
                                Enter the details of your product below.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className={inputClass}
                                    placeholder="Enter product name"
                                    required
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block font-medium text-gray-700">
                                        SKU
                                    </label>
                                    <input
                                        type="text"
                                        value={data.sku}
                                        onChange={(e) => setData('sku', e.target.value)}
                                        className={inputClass}
                                        placeholder="e.g. PROD-001"
                                        required
                                    />
                                    {errors.sku && <p className="mt-1 text-sm text-red-500">{errors.sku}</p>}
                                </div>

                                <div>
                                    <label className="mb-2 block font-medium text-gray-700">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        className={inputClass}
                                        placeholder="e.g. School Supplies"
                                        required
                                    />
                                    {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className={inputClass}
                                    rows={3}
                                    placeholder="Describe your product (optional)"
                                />
                                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block font-medium text-gray-700">
                                        Price (₱)
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className={inputClass}
                                        placeholder="0.00"
                                        required
                                    />
                                    {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
                                </div>

                                <div>
                                    <label className="mb-2 block font-medium text-gray-700">
                                        Stock Quantity
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="1"
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        className={inputClass}
                                        required
                                    />
                                    {errors.stock && <p className="mt-1 text-sm text-red-500">{errors.stock}</p>}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 border-t border-pink-100 pt-6">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600 disabled:opacity-50"
                                >
                                    {processing ? 'Saving...' : 'Save Product ♡'}
                                </button>

                                <Link
                                    href="/products"
                                    className="rounded-xl border border-pink-200 px-6 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
