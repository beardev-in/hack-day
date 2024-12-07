"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

// Define schema for form validation
const FormSchema = z.object({
  teamEmails: z
    .array(
      z
        .string()
        .min(1, { message: "Email is required." })
        .email("Invalid email address.")
    )
    .min(1, { message: "At least one team member email is required." }),
});

type FormData = z.infer<typeof FormSchema>;

const VerifyTeamspage: React.FC = () => {
//   const teamCount = 4; // Hardcoding the team count to 4 for now\

const { teamCount } = useSelector(
    (state: RootState) => state.apply
  );

  console.log(teamCount)


  // Initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamEmails: Array(teamCount).fill(""), // Initialize with empty values
    },
  });

  const [step, setStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    console.log("Team Emails:", data.teamEmails);
    setSubmitted(true);
    // Logic to send emails or perform any action after submission
  };

  // Next Step Handler
  const nextStep = () => {
    if (step < teamCount - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="bg-corner-glow" style={{ height: "calc(100vh)" }}>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center font-mono">
        <div className="w-[613px] bg-custom-gradient p-5 rounded-xl mt-20 border border-gray-600 flex flex-col gap-2">
          <div className="text-[26px] mb-6">
            <p>
              Team <span className="text-[#06C270]">Member Emails</span>
            </p>
            {
                (step < teamCount-1) && <p className="text-[18px]">Please provide email addresses for each team member.</p>
            }
            
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex gap-4"
            >
              {/* Render one input field at a time based on the step */}
              {step < teamCount && (
                <div key={step} className="w-full flex flex-col gap-1">
                  <label
                    htmlFor={`teamEmails.${step}`}
                    className="text-[#06C270] font-medium"
                  >
                    Member {step + 1} Email
                  </label>
                  <div className="flex w-full gap-2">
                    <input
                        {...register(`teamEmails.${step}`)}
                        id={`teamEmails.${step}`}
                        placeholder={`member${step + 1}@example.com`}
                        className={`w-full text-xl text-[#D9D9D9] bg-transparent border-[1.5px] py-2 pr-4 pl-2 focus:outline-none rounded-xl ${
                        errors.teamEmails?.[step]
                            ? "border-red-500"
                            : "border-gray-600"
                        }`}
                    />
                    <button
                        onClick={nextStep}
                        className="border w-[107px] rounded-xl text-white hover:bg-[#04A65C] transition-all"
                    >
                        Continue
                    </button>
                  </div>
                  {errors.teamEmails?.[step] && (
                    <p className="text-red-500 text-sm">
                      {errors.teamEmails[step]?.message}
                    </p>
                  )}
                </div>
              )}
            </form>
          ) : (
            <div className="text-[#06C270] text-center">
              <p>Verification emails have been sent to all team members.</p>
              <p className="mt-2">Please ask them to check their inbox.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyTeamspage;
