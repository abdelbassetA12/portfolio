import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
    FiLock,
    FiUser,
    FiMail,
    FiArrowRight,
    FiEye,
    FiEyeOff,
    FiCheck,
    FiShield,
    FiZap,
    FiBarChart2
} from "react-icons/fi";

export default function Auth() {

    const [activeTab, setActiveTab] = useState("login");

    const { login, register } = useAuth();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleInput = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value
        }));

        setError("");
    };

    const switchTab = (tab) => {
        setActiveTab(tab);
        setError("");

        setForm({
            username: "",
            email: "",
            password: ""
        });

        setShowPassword(false);
    };

    // =========================
    // LOGIN
    // =========================
    const handleLogin = async () => {

        if (!form.username || !form.password) {
            setError("Please enter your username and password.");
            return;
        }

        try {

            setLoading(true);
            setError("");

            const res = await login({
                username: form.username,
                password: form.password
            });

            if (res.success) {
                navigate("/");
            } else {
                setError(
                    res.error ||
                    "Invalid username or password."
                );
            }

        } catch (err) {

            setError(
                err?.response?.data?.error ||
                "Something went wrong. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };

    // =========================
    // REGISTER
    // =========================
    const handleRegister = async () => {

        if (
            !form.username ||
            !form.email ||
            !form.password
        ) {
            setError("Please complete all fields.");
            return;
        }

        if (form.username.length < 3) {
            setError(
                "Username must contain at least 3 characters."
            );
            return;
        }

        if (form.password.length < 6) {
            setError(
                "Your password must contain at least 6 characters."
            );
            return;
        }

        try {

            setLoading(true);
            setError("");

            const res = await register({
                username: form.username,
                email: form.email,
                password: form.password
            });

            // Account created successfully
            if (res?.success !== false) {
                navigate("/");
            } else {
                setError(
                    res.error ||
                    "Unable to create your account."
                );
            }

        } catch (err) {

            setError(
                err?.response?.data?.error ||
                "Unable to create your account."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="auth-page">

            {/* =========================================
                BRAND SIDE
            ========================================= */}

            <section className="auth-brand">

                <div className="brand-background">

                    <div className="glow glow-one" />
                    <div className="glow glow-two" />
                    <div className="grid-pattern" />

                </div>

                <div className="brand-content">

                    <div className="brand-logo">

                        <div className="brand-logo-mark">
                            A
                        </div>

                        <div>
                            <strong>AverTools</strong>
                            <span>Smart workspace</span>
                        </div>

                    </div>

                    <div className="brand-main">

                        <div className="brand-badge">
                            <span className="badge-dot" />
                            Everything you need, in one place
                        </div>

                        <h1>
                            Work smarter.
                            <br />

                            <span>
                                Move faster.
                            </span>
                        </h1>

                        <p>
                            Manage your leads, emails, resumes and
                            professional workflow from one clean,
                            powerful workspace.
                        </p>

                    </div>

                    <div className="brand-features">

                        <div className="brand-feature">

                            <div className="brand-feature-icon">
                                <FiZap />
                            </div>

                            <div>
                                <strong>
                                    Fast workflow
                                </strong>

                                <span>
                                    Built for productivity
                                </span>
                            </div>

                        </div>

                        <div className="brand-feature">

                            <div className="brand-feature-icon">
                                <FiBarChart2 />
                            </div>

                            <div>
                                <strong>
                                    Stay organized
                                </strong>

                                <span>
                                    Everything in one workspace
                                </span>
                            </div>

                        </div>

                        <div className="brand-feature">

                            <div className="brand-feature-icon">
                                <FiShield />
                            </div>

                            <div>
                                <strong>
                                    Secure by design
                                </strong>

                                <span>
                                    Your account stays protected
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="brand-footer">
                        © {new Date().getFullYear()} AverTools
                    </div>

                </div>

            </section>

            {/* =========================================
                AUTH SIDE
            ========================================= */}

            <section className="auth-panel">

                <div className="auth-container">

                    {/* MOBILE BRAND */}

                    <div className="mobile-brand">

                        <div className="mobile-brand-logo">
                            A
                        </div>

                        <strong>
                            AverTools
                        </strong>

                    </div>

                    {/* HEADER */}

                    <div className="auth-heading">

                        <div className="auth-mini-icon">
                            {activeTab === "login" ? (
                                <FiUser />
                            ) : (
                                <FiZap />
                            )}
                        </div>

                        <div>

                            <h2>
                                {activeTab === "login"
                                    ? "Welcome back"
                                    : "Create your account"}
                            </h2>

                            <p>
                                {activeTab === "login"
                                    ? "Sign in to continue to your workspace."
                                    : "Start building your professional workspace today."}
                            </p>

                        </div>

                    </div>

                    {/* TABS */}

                    <div className="auth-tabs">

                        <button
                            type="button"
                            className={
                                activeTab === "login"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                switchTab("login")
                            }
                        >
                            Sign in
                        </button>

                        <button
                            type="button"
                            className={
                                activeTab === "register"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                switchTab("register")
                            }
                        >
                            Create account
                        </button>

                    </div>

                    {/* ERROR */}

                    {error && (
                        <div className="auth-error">
                            <span>!</span>
                            {error}
                        </div>
                    )}

                    {/* FORM */}

                    <div className="auth-form">

                        {/* REGISTER USERNAME */}

                        {activeTab === "register" && (
                            <div className="auth-field">

                                <label>
                                    Username
                                </label>

                                <div className="auth-input">

                                    <FiUser />

                                    <input
                                        type="text"
                                        value={form.username}
                                        placeholder="Choose a username"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            handleInput(
                                                "username",
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                            </div>
                        )}

                        {/* EMAIL */}

                        {activeTab === "register" && (
                            <div className="auth-field">

                                <label>
                                    Email address
                                </label>

                                <div className="auth-input">

                                    <FiMail />

                                    <input
                                        type="email"
                                        value={form.email}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        onChange={(e) =>
                                            handleInput(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                            </div>
                        )}

                        {/* LOGIN USERNAME */}

                        {activeTab === "login" && (
                            <div className="auth-field">

                                <label>
                                    Username or email
                                </label>

                                <div className="auth-input">

                                    <FiUser />

                                    <input
                                        type="text"
                                        value={form.username}
                                        placeholder="Enter your username or email"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            handleInput(
                                                "username",
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                            </div>
                        )}

                        {/* PASSWORD */}

                        <div className="auth-field">

                            <div className="field-label-row">

                                <label>
                                    Password
                                </label>

                                {activeTab === "login" && (
                                    <button
                                        type="button"
                                        className="forgot-password"
                                        onClick={() =>
                                            navigate(
                                                "/forgot-password"
                                            )
                                        }
                                    >
                                        Forgot password?
                                    </button>
                                )}

                            </div>

                            <div className="auth-input">

                                <FiLock />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={form.password}
                                    placeholder={
                                        activeTab === "login"
                                            ? "Enter your password"
                                            : "Create a strong password"
                                    }
                                    autoComplete={
                                        activeTab === "login"
                                            ? "current-password"
                                            : "new-password"
                                    }
                                    onChange={(e) =>
                                        handleInput(
                                            "password",
                                            e.target.value
                                        )
                                    }
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <FiEyeOff />
                                    ) : (
                                        <FiEye />
                                    )}
                                </button>

                            </div>

                            {activeTab === "register" && (
                                <div className="password-hint">

                                    <FiCheck />

                                    At least 8 characters

                                </div>
                            )}

                        </div>

                        {/* SUBMIT */}

                        <button
                            type="button"
                            className="auth-submit"
                            disabled={loading}
                            onClick={
                                activeTab === "login"
                                    ? handleLogin
                                    : handleRegister
                            }
                        >

                            {loading ? (
                                <>
                                    <span className="auth-spinner" />
                                    Please wait...
                                </>
                            ) : (
                                <>
                                    {activeTab === "login"
                                        ? "Sign in"
                                        : "Create account"}

                                    <FiArrowRight />
                                </>
                            )}

                        </button>

                    </div>

                    {/* SECURITY */}

                    <div className="auth-security">

                        <FiShield />

                        <span>
                            Your information is securely protected.
                        </span>

                    </div>

                    {/* BOTTOM */}

                    <div className="auth-bottom">

                        {activeTab === "login" ? (
                            <>
                                Don't have an account?

                                <button
                                    type="button"
                                    onClick={() =>
                                        switchTab("register")
                                    }
                                >
                                    Create one
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?

                                <button
                                    type="button"
                                    onClick={() =>
                                        switchTab("login")
                                    }
                                >
                                    Sign in
                                </button>
                            </>
                        )}

                    </div>

                </div>

            </section>

            <style>{`

                /* =========================================
                   BASE
                ========================================= */

                * {
                    box-sizing: border-box;
                }

                .auth-page {
                    min-height: 100vh;

                    display: grid;

                    grid-template-columns:
                        minmax(0, 1.15fr)
                        minmax(480px, 560px);

                    background: #ffffff;

                    color: #0f172a;

                    font-family:
                        Inter,
                        ui-sans-serif,
                        system-ui,
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        sans-serif;
                }

                /* =========================================
                   BRAND
                ========================================= */

                .auth-brand {
                    position: relative;

                    min-height: 100vh;

                    overflow: hidden;

                    background:
                        linear-gradient(
                            135deg,
                            #4338ca 0%,
                            #4f46e5 48%,
                            #7c3aed 100%
                        );

                    color: #fff;
                }

                .brand-background {
                    position: absolute;
                    inset: 0;

                    overflow: hidden;
                }

                .glow {
                    position: absolute;

                    width: 420px;
                    height: 420px;

                    border-radius: 50%;

                    filter: blur(80px);

                    opacity: 0.28;

                    background: #c4b5fd;
                }

                .glow-one {
                    top: -180px;
                    right: -120px;
                }

                .glow-two {
                    bottom: -180px;
                    left: -120px;

                    background: #818cf8;
                }

                .grid-pattern {
                    position: absolute;
                    inset: 0;

                    opacity: 0.07;

                    background-image:
                        linear-gradient(
                            rgba(255,255,255,.7) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,.7) 1px,
                            transparent 1px
                        );

                    background-size: 38px 38px;

                    mask-image:
                        linear-gradient(
                            to bottom,
                            black,
                            transparent 90%
                        );
                }

                .brand-content {
                    position: relative;

                    z-index: 2;

                    width: min(650px, 100%);

                    min-height: 100vh;

                    margin: 0 auto;

                    padding:
                        42px
                        clamp(40px, 7vw, 100px);

                    display: flex;
                    flex-direction: column;

                    justify-content: space-between;
                }

                .brand-logo {
                    display: flex;
                    align-items: center;

                    gap: 11px;
                }

                .brand-logo-mark {
                    width: 43px;
                    height: 43px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 13px;

                    background:
                        rgba(255,255,255,.14);

                    border:
                        1px solid
                        rgba(255,255,255,.22);

                    backdrop-filter: blur(15px);

                    font-size: 18px;
                    font-weight: 900;

                    box-shadow:
                        0 10px 25px
                        rgba(0,0,0,.08);
                }

                .brand-logo > div:last-child {
                    display: flex;
                    flex-direction: column;

                    gap: 1px;
                }

                .brand-logo strong {
                    font-size: 15px;
                    font-weight: 800;
                }

                .brand-logo span {
                    font-size: 9px;

                    color:
                        rgba(255,255,255,.68);
                }

                .brand-main {
                    max-width: 570px;

                    margin-top: 50px;
                }

                .brand-badge {
                    display: inline-flex;
                    align-items: center;

                    gap: 8px;

                    padding: 8px 12px;

                    border-radius: 999px;

                    background:
                        rgba(255,255,255,.1);

                    border:
                        1px solid
                        rgba(255,255,255,.16);

                    color:
                        rgba(255,255,255,.9);

                    font-size: 10px;

                    font-weight: 700;

                    backdrop-filter: blur(15px);

                    margin-bottom: 21px;
                }

                .badge-dot {
                    width: 6px;
                    height: 6px;

                    border-radius: 50%;

                    background: #a5f3fc;

                    box-shadow:
                        0 0 0 4px
                        rgba(165,243,252,.12);
                }

                .brand-main h1 {
                    margin: 0;

                    font-size:
                        clamp(42px, 5vw, 68px);

                    line-height: 1.02;

                    letter-spacing: -0.055em;

                    font-weight: 850;
                }

                .brand-main h1 span {
                    color: #c4b5fd;
                }

                .brand-main p {
                    max-width: 510px;

                    margin: 24px 0 0;

                    color:
                        rgba(255,255,255,.78);

                    font-size: 15px;

                    line-height: 1.75;
                }

                /* =========================================
                   FEATURES
                ========================================= */

                .brand-features {
                    display: grid;

                    grid-template-columns:
                        repeat(3, 1fr);

                    gap: 10px;

                    margin-top: 55px;
                }

                .brand-feature {
                    display: flex;

                    align-items: center;

                    gap: 9px;

                    min-width: 0;

                    padding: 12px;

                    border-radius: 13px;

                    background:
                        rgba(255,255,255,.08);

                    border:
                        1px solid
                        rgba(255,255,255,.12);

                    backdrop-filter: blur(12px);
                }

                .brand-feature-icon {
                    width: 31px;
                    height: 31px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;

                    background:
                        rgba(255,255,255,.1);

                    color: #ddd6fe;
                }

                .brand-feature div:last-child {
                    min-width: 0;

                    display: flex;
                    flex-direction: column;

                    gap: 2px;
                }

                .brand-feature strong {
                    font-size: 10px;

                    font-weight: 750;

                    white-space: nowrap;
                }

                .brand-feature span {
                    color:
                        rgba(255,255,255,.55);

                    font-size: 8px;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;
                }

                .brand-footer {
                    color:
                        rgba(255,255,255,.4);

                    font-size: 9px;
                }

                /* =========================================
                   AUTH PANEL
                ========================================= */

                .auth-panel {
                    min-height: 100vh;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    padding: 45px 55px;

                    background: #fff;
                }

                .auth-container {
                    width: 100%;

                    max-width: 410px;
                }

                .mobile-brand {
                    display: none;
                }

                /* =========================================
                   HEADING
                ========================================= */

                .auth-heading {
                    display: flex;

                    align-items: flex-start;

                    gap: 12px;

                    margin-bottom: 23px;
                }

                .auth-mini-icon {
                    width: 40px;
                    height: 40px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 12px;

                    color: #4f46e5;

                    background: #eef2ff;

                    border:
                        1px solid #e0e7ff;
                }

                .auth-heading h2 {
                    margin: 0;

                    font-size: 23px;

                    letter-spacing: -0.03em;

                    font-weight: 800;

                    color: #0f172a;
                }

                .auth-heading p {
                    margin: 5px 0 0;

                    color: #64748b;

                    font-size: 11px;

                    line-height: 1.5;
                }

                /* =========================================
                   TABS
                ========================================= */

                .auth-tabs {
                    display: grid;

                    grid-template-columns: 1fr 1fr;

                    padding: 4px;

                    background: #f8fafc;

                    border:
                        1px solid #eef2f7;

                    border-radius: 12px;

                    margin-bottom: 20px;
                }

                .auth-tabs button {
                    height: 38px;

                    border: 0;

                    border-radius: 9px;

                    background: transparent;

                    color: #94a3b8;

                    font-size: 11px;

                    font-weight: 700;

                    cursor: pointer;

                    transition: .2s ease;
                }

                .auth-tabs button:hover {
                    color: #475569;
                }

                .auth-tabs button.active {
                    color: #4f46e5;

                    background: #fff;

                    box-shadow:
                        0 4px 12px
                        rgba(15,23,42,.06);
                }

                /* =========================================
                   ERROR
                ========================================= */

                .auth-error {
                    display: flex;

                    align-items: center;

                    gap: 8px;

                    padding: 10px 12px;

                    margin-bottom: 14px;

                    border-radius: 10px;

                    background: #fff7f7;

                    border: 1px solid #fee2e2;

                    color: #dc2626;

                    font-size: 10px;

                    font-weight: 600;
                }

                .auth-error span {
                    width: 17px;
                    height: 17px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 50%;

                    color: #fff;

                    background: #ef4444;

                    font-size: 10px;
                }

                /* =========================================
                   FORM
                ========================================= */

                .auth-form {
                    display: flex;

                    flex-direction: column;

                    gap: 14px;
                }

                .auth-field {
                    display: flex;

                    flex-direction: column;

                    gap: 6px;
                }

                .auth-field label {
                    color: #334155;

                    font-size: 10px;

                    font-weight: 750;
                }

                .field-label-row {
                    display: flex;

                    align-items: center;

                    justify-content: space-between;
                }

                .forgot-password {
                    border: 0;

                    background: transparent;

                    color: #6366f1;

                    font-size: 9px;

                    font-weight: 700;

                    cursor: pointer;

                    padding: 0;
                }

                .forgot-password:hover {
                    color: #4338ca;
                }

                .auth-input {
                    height: 48px;

                    display: flex;

                    align-items: center;

                    gap: 9px;

                    padding: 0 12px;

                    border:
                        1px solid #e2e8f0;

                    border-radius: 11px;

                    background: #fff;

                    transition:
                        border-color .2s ease,
                        box-shadow .2s ease;
                }

                .auth-input:focus-within {
                    border-color: #818cf8;

                    box-shadow:
                        0 0 0 3px
                        rgba(99,102,241,.09);
                }

                .auth-input > svg {
                    flex: 0 0 auto;

                    color: #94a3b8;

                    width: 16px;
                    height: 16px;
                }

                .auth-input input {
                    min-width: 0;

                    flex: 1;

                    height: 100%;

                    border: 0;

                    outline: 0;

                    background: transparent;

                    color: #0f172a;

                    font: inherit;

                    font-size: 11px;
                }

                .auth-input input::placeholder {
                    color: #b5bfcd;
                }

                .password-toggle {
                    width: 28px;
                    height: 28px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;

                    background: transparent;

                    color: #94a3b8;

                    cursor: pointer;

                    border-radius: 7px;
                }

                .password-toggle:hover {
                    color: #4f46e5;

                    background: #f8fafc;
                }

                .password-hint {
                    display: flex;

                    align-items: center;

                    gap: 5px;

                    margin-top: 1px;

                    color: #94a3b8;

                    font-size: 8px;
                }

                .password-hint svg {
                    color: #10b981;
                }

                /* =========================================
                   SUBMIT
                ========================================= */

                .auth-submit {
                    height: 48px;

                    display: flex;

                    align-items: center;
                    justify-content: center;

                    gap: 8px;

                    margin-top: 4px;

                    border: 0;

                    border-radius: 11px;

                    background:
                        linear-gradient(
                            135deg,
                            #6366f1,
                            #4f46e5
                        );

                    color: #fff;

                    font-size: 11px;

                    font-weight: 750;

                    cursor: pointer;

                    box-shadow:
                        0 9px 22px
                        rgba(79,70,229,.19);

                    transition:
                        transform .2s ease,
                        box-shadow .2s ease,
                        opacity .2s ease;
                }

                .auth-submit:hover:not(:disabled) {
                    transform: translateY(-1px);

                    box-shadow:
                        0 12px 26px
                        rgba(79,70,229,.25);
                }

                .auth-submit:disabled {
                    opacity: .7;

                    cursor: not-allowed;
                }

                .auth-spinner {
                    width: 13px;
                    height: 13px;

                    border:
                        2px solid
                        rgba(255,255,255,.35);

                    border-top-color: #fff;

                    border-radius: 50%;

                    animation:
                        authSpin .7s linear infinite;
                }

                @keyframes authSpin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* =========================================
                   SECURITY
                ========================================= */

                .auth-security {
                    display: flex;

                    align-items: center;
                    justify-content: center;

                    gap: 6px;

                    margin-top: 17px;

                    color: #94a3b8;

                    font-size: 8px;
                }

                .auth-security svg {
                    color: #10b981;

                    width: 12px;
                    height: 12px;
                }

                /* =========================================
                   BOTTOM
                ========================================= */

                .auth-bottom {
                    display: flex;

                    align-items: center;
                    justify-content: center;

                    gap: 4px;

                    margin-top: 24px;

                    color: #94a3b8;

                    font-size: 9px;
                }

                .auth-bottom button {
                    border: 0;

                    background: transparent;

                    padding: 0;

                    color: #6366f1;

                    font-size: inherit;

                    font-weight: 750;

                    cursor: pointer;
                }

                .auth-bottom button:hover {
                    color: #4338ca;
                }

                /* =========================================
                   TABLET
                ========================================= */

                @media (max-width: 1100px) {

                    .auth-page {
                        grid-template-columns:
                            minmax(0, 1fr)
                            470px;
                    }

                    .brand-content {
                        padding:
                            36px
                            55px;
                    }

                    .brand-main h1 {
                        font-size: 48px;
                    }

                    .brand-features {
                        grid-template-columns: 1fr;
                    }

                    .brand-feature {
                        max-width: 320px;
                    }

                    .auth-panel {
                        padding:
                            35px 35px;
                    }

                }

                /* =========================================
                   MOBILE
                ========================================= */

                @media (max-width: 850px) {

                    .auth-page {
                        display: block;

                        min-height: 100vh;

                        background:
                            #f8fafc;
                    }

                    .auth-brand {
                        display: none;
                    }

                    .auth-panel {
                        min-height: 100vh;

                        display: flex;

                        align-items: center;
                        justify-content: center;

                        padding:
                            35px 20px;
                    }

                    .auth-container {
                        max-width: 410px;

                        padding:
                            30px 25px;

                        border:
                            1px solid #e2e8f0;

                        border-radius: 22px;

                        background: #fff;

                        box-shadow:
                            0 20px 50px
                            rgba(15,23,42,.07);
                    }

                    .mobile-brand {
                        display: flex;

                        align-items: center;

                        justify-content: center;

                        gap: 9px;

                        margin-bottom: 28px;
                    }

                    .mobile-brand-logo {
                        width: 37px;
                        height: 37px;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        border-radius: 11px;

                        background:
                            linear-gradient(
                                135deg,
                                #6366f1,
                                #4f46e5
                            );

                        color: #fff;

                        font-size: 15px;

                        font-weight: 900;
                    }

                    .mobile-brand strong {
                        color: #0f172a;

                        font-size: 15px;

                        font-weight: 800;
                    }

                }

                /* =========================================
                   SMALL MOBILE
                ========================================= */

                @media (max-width: 480px) {

                    .auth-panel {
                        padding:
                            18px 12px;
                    }

                    .auth-container {
                        padding:
                            25px 17px;

                        border-radius: 19px;
                    }

                    .mobile-brand {
                        margin-bottom: 23px;
                    }

                    .auth-heading h2 {
                        font-size: 20px;
                    }

                    .auth-heading p {
                        font-size: 10px;
                    }

                    .auth-mini-icon {
                        width: 36px;
                        height: 36px;
                    }

                    .auth-tabs {
                        margin-bottom: 18px;
                    }

                    .auth-input,
                    .auth-submit {
                        height: 47px;
                    }

                    .auth-bottom {
                        margin-top: 20px;
                    }

                }

            `}</style>

        </div>
    );
}
  