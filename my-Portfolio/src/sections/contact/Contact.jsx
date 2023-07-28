import Box from "@mui/material/Box";
import {
  StyledTextField,
  StyledTextField2,
  StyledButton,
} from "./StyledComponentsMUI";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Contact() {
  const schema = z.object({
    name: z.string().min(2, { message: "Please enter a valid name." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    subject: z.string().min(3, { message: "Subject is too short." }),
    message: z.string().min(5, { message: "Message is too short." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formdata) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(formdata);
        resolve();
      }, 2000);
    });
  };

  return (
    <section >
      <div className="relative w-full h-full bg-contactBG bg-cover bg-center bg-no-repeat py-32">
        <div className="absolute inset-0 bg-black opacity-[0.79]"></div>
        <div className="relative flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center gap-4">
            <h2 className="font-Tektur text-[#ad43de] text-lg font-bold tracking-widest">
              CONTACT
            </h2>
            <h1 className="text-5xl font-serif font-medium leading-8 text-white">
              Say Hello.
            </h1>
            <h4 className=" font-medium text-lg text-center text-[#a0a0a0] mt-4">
              Submit the form bellow and I will get back to you as soon as
              possible.
            </h4>
          </div>
          <div className="mt-28 mx-auto flex flex-col md:flex-row gap-20">
            <div className="w-[300px]  md:w-[400px]">
              <Box
                component="form"
                sx={{
                  textEmphasisColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
              >
                <StyledTextField
                  id={"name"}
                  register={register}
                  errors={errors}
                  name={"name"}
                  label={"Name"}
                />
                <StyledTextField
                  id={"email"}
                  register={register}
                  errors={errors}
                  name={"email"}
                  label={"Email"}
                />
                <StyledTextField
                  id={"subject"}
                  register={register}
                  errors={errors}
                  name={"subject"}
                  label={"Subject"}
                />

                <StyledTextField2
                  id={"message"}
                  register={register}
                  errors={errors}
                  name={"message"}
                  label={"Message"}
                />
                <StyledButton
                  isSubmitting={isSubmitting}
                  isSubmitted={isSubmitSuccessful}
                />
              </Box>
            </div>
            <div className="text-white space-y-10">
              <div>
                <h2 className="font-Roboto font-extrabold">PHONE</h2>
                <p className="pt-1 text-[#d3d3d3]">+1 (778)861-9031</p>
              </div>
              <div>
                <h2 className="font-Roboto font-thin">EMAIL</h2>
                <p className="pt-1 text-[#d3d3d3]" >
                  <a
                    href="mailto:gyunay@hotmail.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gyunay@hotmail.dk
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-Roboto font-bold">ADDRESS</h2>
                <p className="pt-1 text-[#d3d3d3]">
                  Downtown, Vancouver, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
