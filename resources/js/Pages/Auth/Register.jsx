import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Create Account | StudyMate" />

            <div className="relative">
                {/* Decorative background details */}
                <div className="pointer-events-none absolute -right-5 -top-8 h-24 w-24 rounded-full bg-pink-100/70 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-rose-100/70 blur-2xl" />

                <div className="relative">
                    {/* Logo and heading */}
                    <div className="mb-7 text-center">
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
                                Join StudyMate!
                            </h1>

                            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                                Create your account and make organizing
                                schoolwork a little easier.
                            </p>
                        </div>
                    </div>

                    {/* Registration form */}
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <InputLabel
                                htmlFor="name"
                                value="Full name"
                                className="font-semibold text-slate-700"
                            />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-2 block w-full rounded-xl border-pink-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

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
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="font-semibold text-slate-700"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-2 block w-full rounded-xl border-pink-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                                placeholder="Create a password"
                                autoComplete="new-password"
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

                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm password"
                                className="font-semibold text-slate-700"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-2 block w-full rounded-xl border-pink-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                                placeholder="Enter your password again"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <PrimaryButton
                            className="w-full justify-center rounded-xl bg-pink-500 py-3.5 font-bold text-white shadow-lg shadow-pink-200/70 transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-700"
                            disabled={processing}
                        >
                            {processing
                                ? "Creating account..."
                                : "Create Account ♡"}
                        </PrimaryButton>
                    </form>

                    {/* Login link */}
                    <div className="mt-6 border-t border-pink-100 pt-6 text-center">
                        <p className="text-sm text-slate-500">
                            Already have an account?{" "}
                            <Link
                                href={route("login")}
                                className="font-bold text-pink-600 transition hover:text-pink-800 hover:underline"
                            >
                                Sign in
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