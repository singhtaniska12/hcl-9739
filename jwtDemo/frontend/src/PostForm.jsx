
import { useActionState } from "react";
import SubmitButton from "./SubmitButton";
import api from "./Api";

const PostForm = ({ onCreated }) => {
  const submitAction = async (prev, formData) => {
    const title = formData.get("title")?.trim();
    const content = formData.get("content")?.trim();

    if (!title || !content) {
      return {
        error: "Title and content is required",
        msg: "",
        title: title || "",
        content: content || "",
      };
    }

    try {
      await api.post("/posts", { title, content });
      await onCreated?.();

      return {
        error: null,
        msg: "post created successfully",
        title: "",
        content: "",
      };
    } catch (error) {
      return {
        error:
          error.response?.data?.error ||
          error.response?.dta?.message ||
          "failed to create post. Please try again.",
        msg: "",
        title,
        content,
      };
    }
  };

  const [state, formAction, isPending] = useActionState(submitAction, {
    error: null,
    msg: "",
    title: "",
    content: "",
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        action={formAction}
        className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8"
      >
        <h3 className="text-2xl font-bold text-gray-800">
          Write a Post
        </h3>

        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          defaultValue={state.title}
          required
          disabled={isPending}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-gray-100"
        />

        <textarea
          name="content"
          id="content"
          placeholder="Content"
          rows={4}
          defaultValue={state.content}
          required
          disabled={isPending}
          className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-gray-100"
        ></textarea>

        <SubmitButton />

        {state.msg && (
          <p
            role="status"
            className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
          >
            {state.msg}
          </p>
        )}

        {state.error && (
          <p
            role="status"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
          >
            {state.error}
          </p>
        )}
      </form>
    </div>
  );
};

export default PostForm;
