"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { setTeamEmails, setCurrentStep } from "@/app/redux/features/ApplicationSlice";

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
  const dispatch = useDispatch();
  const { teamCount, currentStep, teamEmails } = useSelector(
    (state: RootState) => state.apply
  );

  // Check if teamCount is undefined
  if (teamCount === undefined) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  // Initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamEmails: Array(teamCount).fill(""), // Initialize with empty values
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log("Team Emails:", data.teamEmails);
    dispatch(setTeamEmails(data.teamEmails)); // Save emails to Redux store
    // Logic to send emails or perform any action after submission
  };

  // Next Step Handler
  const nextStep = () => {
    if (currentStep < teamCount - 1) {
      dispatch(setCurrentStep(currentStep + 1)); // Update the step in Redux store
    }
  };

  useEffect(() => {
    if (teamEmails.length < teamCount) {
      // Initialize teamEmails if it's not already set
      dispatch(setTeamEmails(Array(teamCount).fill("")));
    }
  }, [teamCount, teamEmails, dispatch]);

  return (
    <div className="bg-corner-glow" style={{ height: "calc(100vh)" }}>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center font-mono p-4">
        <div className="w-full md:w-[613px] bg-custom-gradient p-5 rounded-xl mt-20 border border-gray-600 flex flex-col gap-2">
          <div className="text-[26px] mb-6">
            <p>
              Team <span className="text-[#06C270]">Member Emails</span>
            </p>
            {currentStep < teamCount - 1 && (
              <p className="text-[18px]">
                Please provide email addresses for each team member.
              </p>
            )}
          </div>

          {!teamEmails.every((email) => email.trim() !== "") ? (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex gap-4">
              {/* Render one input field at a time based on the step */}
              {currentStep < teamCount && (
                <div key={currentStep} className="w-full flex flex-col gap-1">
                  <label
                    htmlFor={`teamEmails.${currentStep}`}
                    className="text-[#06C270] font-medium"
                  >
                    Member {currentStep + 1} Email
                  </label>
                  <div className="flex flex-col md:flex-row w-full gap-2">
                    <input
                      {...register(`teamEmails.${currentStep}`)}
                      id={`teamEmails.${currentStep}`}
                      placeholder={`member${currentStep + 1}@example.com`}
                      className={`w-full text-xl text-[#D9D9D9] bg-transparent border-[1.5px] py-2 pr-4 pl-2 focus:outline-none rounded-xl ${
                        errors.teamEmails?.[currentStep]
                          ? "border-red-500"
                          : "border-gray-600"
                      }`}
                    />
                    <button
                      onClick={nextStep}
                      className="border w-full md:w-[107px] rounded-xl text-white hover:bg-[#04A65C] transition-all p-1 md:p-0"
                    >
                      Continue
                    </button>
                  </div>
                  {errors.teamEmails?.[currentStep] && (
                    <p className="text-red-500 text-sm">
                      {errors.teamEmails[currentStep]?.message}
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
