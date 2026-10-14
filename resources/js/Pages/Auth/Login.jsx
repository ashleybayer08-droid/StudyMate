import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Login | StudyMate" />

            <div className="relative">
                {/* Decorative background details */}
                <div className="pointer-events-none absolute -right-5 -top-8 h-24 w-24 rounded-full bg-pink-100/70 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-rose-100/70 blur-2xl" />

                <div className="relative">
                    {/* Logo and heading */}
                    <div className="mb-8 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-pink-600 transition hover:text-pink-700"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100 text-xl">
                                🌸
                            </span>
                            StudyMate<span className="text-pink-400">.</span>
                        </Link>

                        <div className="mt-7">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
                                YOUR STUDY SPACE
                            </p>

                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                                Welcome back!
                            </h1>

                            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                                Your tasks are waiting. Sign in and continue
                                where you left off.
                            </p>
                        </div>
                    </div>

                    {/* Status message */}
                    {status && (
                        <div className="mb-5 rounded-2xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm font-medium leading-6 text-pink-700">
                            {status}
                        </div>
                    )}

                    {/* Login form */}
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Email address"
                                className="font-semibold text-slate-700"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-2 block w-full rounded-xl border-pink-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                                placeholder="you@example.com"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-3">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="font-semibold text-slate-700"
                                />

                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-xs font-semibold text-pink-600 transition hover:text-pink-800 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-2 block w-full rounded-xl border-pink-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <label className="flex w-fit cursor-pointer items-center gap-2.5">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />

                            <span className="text-sm text-slate-600">
                                Remember me
                            </span>
                        </label>

                        <PrimaryButton
                            className="w-full justify-center rounded-xl bg-pink-500 py-3.5 font-bold text-white shadow-lg shadow-pink-200/70 transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-700"
                            disabled={processing}
                        >
                            {processing ? "Signing in..." : "Sign in ♡"}
                        </PrimaryButton>
                    </form>

                    {/* Register link */}
                    <div className="mt-7 border-t border-pink-100 pt-6 text-center">
                        <p className="text-sm text-slate-500">
                            New to StudyMate?{" "}
                            <Link
                                href={route("register")}
                                className="font-bold text-pink-600 transition hover:text-pink-800 hover:underline"
                            >
                                Create an account
                            </Link>
                        </p>

                        <Link
                            href="/"
                            className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-pink-600"
                        >
                            <span aria-hidden="true">←</span>
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}