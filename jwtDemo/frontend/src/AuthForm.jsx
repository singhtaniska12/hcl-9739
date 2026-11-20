
// eslint-disable-next-line no-unused-vars
import React, { useState, useActionState } from 'react'
import api from './Api.jsx'
import SubmitButton from './SubmitButton.jsx'

const AuthForm = ({ onLogin }) => {
  const [mode, setMode] = useState('login')

  const submitAction = async (prevState, formData) => {
    const username = formData.get('username')?.trim()
    const password = formData.get('password')?.trim()

    if (!username || !password) {
      return {
        error: 'Username and password are required',
        msg: 'Please fill in both fields',
        username: username || '',
      }
    }

    try {
      if (mode === 'register') {
        await api.post('/register', { username, password })
        setMode('login')
        return {
          error: null,
          msg: 'Registration successful. Please log in.',
          username
        }
      }

      const { data } = await api.post('/login', { username, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('username', username)
      onLogin(data.user)

      return {
        error: null,
        msg: 'Login successful',
        username: data.username
      }
    } catch (error) {
      return {
        error: error.response?.data?.error ||
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        msg: "",
        username,
      }
    }
  }

  const [state, formAction, isPending] = useActionState(submitAction, {
    error: null,
    msg: "",
    username: ""
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 px-4 py-10">
      <form
        action={formAction}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-xl sm:p-10"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-800">
            {mode === 'login' ? 'Login' : 'Register'}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            {mode === 'login'
              ? 'Welcome back! Please log in to your account.'
              : 'Create an account to get started.'}
          </p>
        </div>

        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          defaultValue={state.username}
          required
          disabled={isPending}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-gray-100"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          disabled={isPending}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-gray-100"
        />

        <SubmitButton />

        <button
          type="button"
          onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          disabled={isPending}
          className="w-full rounded-lg border border-blue-600 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {mode === 'login' ? 'Switch to Register' : 'Switch to Login'}
        </button>

        {state.error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {state.error}
          </p>
        )}

        {state.msg && (
          <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            {state.msg}
          </p>
        )}
      </form>
    </div>
  )
}

export default AuthForm
