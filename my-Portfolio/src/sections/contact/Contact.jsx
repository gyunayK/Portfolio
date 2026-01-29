import Box from '@mui/material/Box'
import Reveal from '@/components/Reveal'
import { StyledTextField, StyledTextField2, StyledButton } from './StyledComponentsMUI'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

import { useRef } from 'react'

function Contact() {
  const form = useRef()
  const schema = z.object({
    user_name: z.string().min(2, { message: 'Please enter a valid name.' }),
    user_email: z.string().email({ message: 'Please enter a valid email.' }),
    user_subject: z.string().min(3, { message: 'Subject is too short.' }),
    message: z.string().min(5, { message: 'Message is too short.' })
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const sendEmail = async () => {
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const templateID = import.meta.env.VITE_TEMPLATE_ID

    if (!serviceID || !publicKey) return

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
    } catch (error) {
      console.log(error.text)
    }
  }

  return (
    <section id="contact" className="bg-stone-100 py-16">
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-Tektur text-[#AE00FF] text-lg font-bold tracking-widest">CONTACT</h2>
          <h1 className="text-5xl font-serif font-medium leading-8">Say Hello</h1>
          <h2 className="font-medium text-lg text-center text-gray-500 mt-3 px-5 ">
            Fill out the form below and I&apos;ll get back to you shortly.
          </h2>
        </div>
        <div className="mt-5 sm:mt-16 mx-auto flex flex-col md:flex-row gap-20 scale-90">
          <div className="w-[300px] md:w-[400px] ">
            <Box
              component="form"
              sx={{
                textEmphasisColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
              onSubmit={handleSubmit(sendEmail)}
              autoComplete="off"
              ref={form}
            >
              <StyledTextField
                id="name"
                register={register}
                errors={errors}
                name="user_name"
                label="Name"
              />
              <StyledTextField
                id="email"
                register={register}
                errors={errors}
                name="user_email"
                label="Email"
              />
              <StyledTextField
                id="subject"
                register={register}
                errors={errors}
                name="user_subject"
                label="Subject"
                formname="_subject"
              />
              <StyledTextField2
                id="message"
                register={register}
                errors={errors}
                name="message"
                label="Message"
              />
                  <StyledButton isSubmitting={isSubmitting} isSubmitted={isSubmitSuccessful} />
            </Box>
          </div>
          <div className="text-black space-y-10 px-1">
            <div>
              <h2 className="font-Roboto font-extrabold ">EMAIL</h2>
              <Reveal>
                <p className="underline">
                  <a href="mailto:web-dev@gyunay-kadirov.com" target="_blank" rel="noopener noreferrer">
                    web-dev@gyunay-kadirov.com
                  </a>
                </p>
              </Reveal>
            </div>
            <div>
              <h2 className="font-Roboto font-bold">LOCATION</h2>
              <Reveal>
                <p>Vancouver BC, Canada</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
