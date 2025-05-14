// // TODO: Import useForm, zodResolver, axios, useNavigate, useState, and noteSchem
// import React,{useState} from 'react';
// import { set, useForm } from 'react-hook-form';
// import axios from 'axios';
// import { noteSchema } from '../schema/notes';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {  useNavigate} from 'react-router-dom';
// import { Save } from "lucide-react";

// // TODO: Setup isSubmitting state with useState
// const CreateNoteForm = ({ onSubmitSuccess }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');
  
  
    
   
//   // TODO: create navigate variable and set to useNavigate()const navigate = useNavigate();
  
//   const navigate  = useNavigate();
//   const handleFormSubmitSuccess = () => {
//     setTimeout(() => {
//       navigate('/volunteers');
//     }, 2000);
//   };

  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors},
//     reset,
//   } = useForm({
//     mode: 'onChange',
//     resolver: zodResolver(noteSchema),
    
//   });
//   // TODO: Set up the form with useForm from react-hook-form and zodResolver from @hookform/resolvers/zod

//   const sendToTheServer = async (data) => {
     
//     setIsSubmitting(true)
//     setSubmitSuccess(false)
//     setSubmitError('')
   
//     try {
//       await axios.post ('http://localhost:3001/api/notes', data, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
      
//       setSubmitSuccess(true);
//       reset();
//       onSubmitSuccess();
      
//       setTimeout(() => {
//         setSubmitSuccess(false);
//       }, 5000);
      
//     } catch (error) {
//       setSubmitError('There was an error submitting your form. Please try again.');
//       console.error('Form submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

  
//     // TODO: Send the data to the server
//     // TODO: Use axios to create a new note in the server using the endpoint http://localhost:3001/api/notes


//   return (
    
//     <form onSubmit={handleSubmit} className="space-y-6 bg-white w-[70%] h-[100%] px-4 py-5 ml-20 shadow-sm">
//       <h1>Create a New  Note</h1>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-x-6 gap-y-4 ">
//           {/* Personal Information */}
          
//           <div className='grid grid-cols-1'>
//             <label htmlFor="NoteTitle" className="form-label">Title*</label>
//             <input
//               id="NoteTitle"
//               type="text"
//                placeholder='Note Title'
//                className=' border border-grey-500 py-1 px-2 rounded-md outline-none'

//             />
//             {errors.NoteTitle && <p className="error-message">{errors.NoteTitle.message}</p>}
//           </div>
    
//           <div className='grid grid-cols-1'>
//             <label htmlFor="content" className="form-label">content *</label>
//             <textarea
//               id="content"
//               type="text"
//               placeholder='write your note here'
//               className='border border-gray-500 py-1 px-2 rounded-md  outline-none w-full resize-none '
//              >
//             {errors.content && <p className="error-message">{errors.content.message}</p>}
//             </textarea>
//           </div>
           

//           <button className='flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded-md text-center gap-x-2'>
//            <Save className='size-5' />
//            <span>Save Note</span>
//          </button>

//   </div>
  
//   </form>
  
//   );
// };

// {/* TODO: Setup the form with TailwindCSS, create a form with the following fields: title, content, and submit button */}


// export default CreateNoteForm
