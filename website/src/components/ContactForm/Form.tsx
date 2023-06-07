import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ContactForm = ({ }) => {
  const [showPhone, setShowPhone] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border p-5 rounded">
        <div className="flex">
          <div></div>
          <div className='flex flex-col gap-2'
          >
            <h3 className='text-2xl font-bold'>Esther Wangui</h3>
            <div className='text-sm text-gray-500 font-semibold'>Steddy Trading Company Ltd</div>
            <div className='text-sm text-gray-500 font-semibold'>Shujaa Estate - Kangundo Road</div>
            {
              showPhone ?
                <div>
                  <a href="tel:+254721707171" className='text-blue-500 hover:underline'>+254721707171</a>
                </div>
                :
                <button className='font-bold border-2 border-black rounded-lg py-1 px-3' onClick={() => setShowPhone(true)} type="button">Show Phone</button>
            }
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="flex flex-col gap-2">
            <input className={`p-3 rounded border border-gray-500 ${errors?.fullname ? 'border-2 border-red-500 focus:border-red-500 active:outline-red-500' : ''}`} type='text' placeholder='Full Name' autoComplete='name' {...register('fullname', { required: true, maxLength: 30 })} />
            {
              errors?.fullname && <p className='text-red-500 text-xs'>Full name is required and must be less than 30 characters</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <input className='p-3 rounded border' type='email' placeholder='Email (optional)' autoComplete='email' {...register('email')} />
          </div>

          <div className="flex flex-col gap-2">
            <input className={`p-3 rounded border border-gray-500 ${errors?.phone ? 'border-2 border-red-500' : ''}`} type='tel' placeholder='Phone' autoComplete='tel' {...register('phone', { required: true, pattern: /^(07|011|020)\d{8}$/ })} />
            {
              errors?.phone && <p className='text-red-500 text-sm'>Phone is required and should be the right format i.e. 0700.. 011... or 020</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <textarea className={`p-3 rounded border border-gray-500 ${errors?.message ? 'border-2 border-red-500 outline-red-500' : ''}`} placeholder='Write a message...' {...register('message', { required: true, minLength: 10 })} />
            {
              errors?.message && <p className='text-red-500 text-sm'>Message is required and must be at least 10 characters</p>
            }
          </div>
          <button className='p-3 bg-yellow-400 text-white' type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

