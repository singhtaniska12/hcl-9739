import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md transition duration-300 ${
        pending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
      }`}
    >
      {pending ? 'Submitting Securely...' : 'Submit'}
    </button>
  )
}

export default SubmitButton