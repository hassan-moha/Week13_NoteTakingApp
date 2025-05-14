import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { noteSchema } from "../schema/notes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Save } from "lucide-react";

const CreateNoteForm = ({ onSubmitSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(noteSchema),
  });

  const sendToTheServer = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await axios.post("http://localhost:3001/api/notes", data, {
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      console.log("it worked", data)

      reset();
      if (onSubmitSuccess) {
        onSubmitSuccess(); 
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setSubmitError("There was an error submitting your form. Please try again.");
      // console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(sendToTheServer)}
      className="space-y-6 bg-white w-[70%] h-[100%] px-4 py-5 ml-20 shadow-sm"
    >
      <h1>Create a New Note</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-x-6 gap-y-4">
        {/* Title Field */}
        <div className="grid grid-cols-1">
          <label htmlFor="title" className="form-label">
            Title*
          </label>
          <input
            id="title"
            type="text"
            placeholder="Note Title"
            className="border border-gray-500 py-1 px-2 rounded-md outline-none"
            {...register("title")}
          />
          {errors.title && <p className="error-message text-red-500">{errors.title.message}</p>}
        </div>

        {/* Content Field */}
        <div className="grid grid-cols-1">
          <label htmlFor="content" className="form-label">
            Content*
          </label>
          <textarea
            id="content"
            placeholder="Write your note here"
            className="border border-gray-500 py-1 px-2 rounded-md outline-none w-full resize-none"
            {...register("content")}
          />
          {errors.content && <p className="error-message text-red-500">{errors.content.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded-md text-center gap-x-2"
          disabled={isSubmitting}
        >
          <Save className="size-5" />
          <span>{isSubmitting ? "Submitting..." : "Save Note"}</span>
        </button>
      </div>

      {submitError && <p className="error-message text-red-500">{submitError}</p>}
    </form>
  );
};


export default CreateNoteForm;
