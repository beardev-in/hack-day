"use client";

import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setEmail, setEmailOtp } from "@/app/redux/features/RegistrationSlice"; // Import actions
import { RootState } from "@/app/redux/store"; // Import RootState
import Link from "next/link";

// Define schema for form validation
const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "FullName must be at least 2 characters.",
    })
    .max(30, {
      message: "FullName should not exceed 30 characters.",
    }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email."),
  emailOtp: z
    .string()
    .min(6, { message: "OTP must be 6 characters." })
    .max(6, { message: "OTP must be 6 characters." }),
});

// Map step indices to field names
const stepField: Record<number, "fullName" | "email" | "emailOtp"> = {
  0: "fullName",
  1: "email",
  2: "emailOtp",
};

type FormData = z.infer<typeof FormSchema>;

const Registerpage: React.FC = () => {
  const dispatch = useDispatch();
  const { fullName, email, emailOtp } = useSelector(
    (state: RootState) => state.registration
  );

  const {
    register,
    trigger,
    getValues,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: fullName ?? "",
      email: email ?? "",
      emailOtp: emailOtp ?? "",
    },
  });

  const [step, setStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Simulate OTP sending logic
  const sendOtpToEmail = async (email: string) => {
    console.log(`OTP sent to ${email}`); // Replace with actual API call logic
    alert(`OTP sent to ${email}`);
  };

  // Move to the next step
  const nextStep = async () => {
    const field = stepField[step];
    const isValid = await trigger(field);

    if (isValid) {
      clearErrors(field);

      // Add step to completed steps
      setCompletedSteps((prev) => [...prev, step]);

      // Trigger OTP send logic after email verification step
      if (field === "email") {
        const email = getValues("email");
        sendOtpToEmail(email);
        dispatch(setEmail(email)); // Dispatch email to store
      }

      if (field === "fullName") {
        dispatch(setFullName(getValues("fullName"))); // Dispatch fullName to store
      }

      if (field === "emailOtp") {
        dispatch(setEmailOtp(getValues("emailOtp"))); // Dispatch OTP to store
      }

      setStep((prev) => prev + 1);
    } else {
      setError(field, {
        type: "manual",
        message: `${field === "fullName" ? "Full Name" : field === "email" ? "Email" : "OTP"} is invalid.`,
      });
    }
  };

  return (
    <div className="bg-corner-glow" style={{ height: "calc(100vh)" }}>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center font-mono">
        <div className="w-[613px] bg-custom-gradient p-5 rounded-xl mt-20 border border-gray-600 flex flex-col gap-2">
          <div className="text-[26px] mb-6">
            <p>Welcome to Hack $Day</p>
            <p>
              Let’s begin the <span className="text-[#06C270]">Hacking</span>
            </p>
          </div>
          {/* Registration fields */}
          {step >= 0 && (
            <>
              <label htmlFor="fullname" className="text-[#06C270]">
                Enter your FullName
              </label>
              <div className="flex gap-2 relative mb-2">
                <input
                  {...register("fullName")}
                  placeholder="John Doe"
                  className={`w-full text-xl text-[#D9D9D9] leading-[32.68px] font-[400] bg-transparent border-[1.5px] py-2 pr-10 pl-2 focus:outline-none rounded-xl ${
                    completedSteps.includes(0) ? "border-[#06C270]" : ""
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") nextStep();
                  }}
                />
                <button onClick={() => nextStep()} className="border w-[107px] rounded-xl">
                  continue
                </button>
              </div>
              {errors.fullName && (
                <p style={{ color: "orangered" }}>{errors.fullName.message}</p>
              )}
            </>
          )}

          {step >= 1 && (
            <>
              <label htmlFor="email" className="text-[#06C270]">
                Enter your email
              </label>
              <div className="flex gap-2 relative mb-2">
                <input
                  {...register("email")}
                  placeholder="John@gmail.com"
                  className={`w-full text-xl text-[#D9D9D9] leading-[32.68px] font-[400] bg-transparent border-[1.5px] py-2 pr-10 pl-2 focus:outline-none rounded-xl ${
                    completedSteps.includes(1) ? "border-[#06C270]" : ""
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") nextStep();
                  }}
                />
                <button
                  onClick={() => nextStep()}
                  className="border w-[107px] rounded-xl"
                >
                  continue
                </button>
              </div>
              {errors.email && (
                <p style={{ color: "orangered" }}>{errors.email.message}</p>
              )}
            </>
          )}

          {step >= 2 && (
            <>
              <label htmlFor="emailOtp" className="text-[#06C270]">
                Enter the OTP sent to your email
              </label>
              <div className="flex gap-2 relative mb-2">
                <input
                  {...register("emailOtp")}
                  placeholder="Enter OTP"
                  maxLength={6}
                  className={`w-full text-xl text-[#D9D9D9] leading-[32.68px] font-[400] bg-transparent border-[1.5px] py-2 pr-10 pl-2 focus:outline-none rounded-xl ${
                    completedSteps.includes(2) ? "border-[#06C270]" : ""
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") nextStep();
                  }}
                />
                <button
                  onClick={() => nextStep()}
                  className="border w-[107px] rounded-xl"
                >
                  verify
                </button>
              </div>
              {errors.emailOtp && (
                <p style={{ color: "orangered" }}>{errors.emailOtp.message}</p>
              )}
            </>
          )}
        </div>
        <div className="mt-4">
          <p>
            Already A registered user?{" "}
            <Link href="/registrations/apply" className="text-[#0563F0]">
              Apply
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
