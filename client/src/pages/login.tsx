// File: src/pages/login.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import styles from './login.module.css'; 

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const toggleShow = () => setShowPwd(!showPwd);


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />

        <div className={styles.welcomePanel}>
          <h2 className="text-4xl font-bold mb-4">WELCOME</h2>
          <p>Your headline name goes here. Lorem ipsum dolor sit amet…</p>
        </div>

        <div className={styles.formPanel}>
          <h2 className={styles.title}>Sign in</h2>
          <p className={styles.subtitle}>Enter your username and password.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <User className={styles.iconLeft} size={20} />
              <input
                className={styles.input}
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <Lock className={styles.iconLeft} size={20} />
              <input
                className={styles.input}
                type={showPwd ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleShow}
                className={styles.toggleBtn}
              >
                {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className={styles.options}>
              <label>
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className={styles.primaryBtn}>
              Sign in
            </button>

            <div className={styles.divider}>
              <hr />
              <span>Or</span>
              <hr />
            </div>

            <button type="button" className={styles.secondaryBtn}>
              Sign in with other
            </button>

            <p className={styles.signUp}>
              Don’t have an account?{' '}
              <Link href="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}



