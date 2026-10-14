import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Index({ auth, products = [] }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-bold text-pink-700">
                    Product Management 🌸
                </h2>
            }
        >
            <Head title="My Products" />

            <div className="min-h-screen bg-pink-50 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-pink-500">
                                Inventory Dashboard
                            </p>
                            <h1 className="mt-2 text-3xl font-extrabold text-gray-800">
                                My Products
                            </h1>
                            <p className="mt-2 text-gray-500">
                                Manage your products in one place.
                            </p>
                        </div>

                        <Link
                            href="/products/create"
                            className="rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-md shadow-pink-200 transition hover:bg-pink-600"
                        >
                            + Add Product
                        </Link>
                    </div>

                    {flash?.success && (
                        <div className="mb-6 rounded-xl border border-pink-200 bg-white px-5 py-4 text-pink-700">
                            {flash.success}
                        </div>
                    )}

                    <div className="mb-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                Total Products
                            </p>
                            <p className="mt-2 text-3xl font-bold text-pink-600">
                                {products.length}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                Total Stock
                            </p>
                            <p className="mt-2 text-3xl font-bold text-pink-600">
                                {products.reduce(
                                    (total, product) =>
                                        total + Number(product.stock || 0),
                                    0
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm">
                        {products.length === 0 ? (
                            <div className="px-6 py-16 text-center">
                                <div className="text-5xl">📦</div>

                                <h3 className="mt-4 text-xl font-bold text-gray-800">
                                    No products yet
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    Add your first product to get started!
                                </p>

                                <Link
                                    href="/products/create"
                                    className="mt-5 inline-block rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white hover:bg-pink-600"
                                >
                                    Add Your First Product
                                </Link>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-pink-100 text-pink-800">
                                        <tr>
                                            <th className="px-5 py-4">Product</th>
                                            <th className="px-5 py-4">SKU</th>
                                            <th className="px-5 py-4">Category</th>
                                            <th className="px-5 py-4">Price</th>
                                            <th className="px-5 py-4">Stock</th>
                                            <th className="px-5 py-4">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {products.map((product) => (
                                            <tr
                                                key={product.id}
                                                className="border-b border-pink-50 transition hover:bg-pink-50"
                                            >
                                                <td className="px-5 py-4">
                                                    <p className="font-semibold text-gray-800">
                                                        {product.name}
                                                    </p>
                                                    <p className="mt-1 max-w-xs truncate text-xs text-gray-500">
                                                        {product.description || 'No description'}
                                                    </p>
                                                </td>

                                                <td className="px-5 py-4 text-gray-600">
                                                    {product.sku}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">
                                                        {product.category}
                                                    </span>
                                                </td>

                                                <td className="whitespace-nowrap px-5 py-4 font-semibold text-gray-800">
                                                    ₱{Number(product.price).toFixed(2)}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                            Number(product.stock) === 0
                                                                ? 'bg-red-100 text-red-600'
                                                                : 'bg-green-100 text-green-700'
                                                        }`}
                                                    >
                                                        {product.stock} in stock
                                                    </span>
                                                </td>

                                                <td className="whitespace-nowrap px-5 py-4">
                                                    <Link
                                                        href={`/products/${product.id}/edit`}
                                                        className="font-semibold text-pink-600 hover:text-pink-800 hover:underline"
                                                    >
                                                        Edit
                                                    </Link>

                                                    {' / '}

                                                    <Link
                                                        href={`/products/${product.id}`}
                                                        className="font-semibold text-gray-500 hover:text-pink-600"
                                                    >
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        StudyMate Product Management · Made with ♡
                    </p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}