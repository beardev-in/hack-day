"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux"; 
import { setTeamName, setTeamCount, setParticipationType } from "@/app/redux/features/ApplicationSlice"; 
import { RootState } from "@/app/redux/store";

// Define schema for form validation
const FormSchema = z.object({
  teamName: z
    .string()
    .min(4, { message: "Team Name must be at least 4 characters." })
    .max(30, { message: "Team Name should not exceed 30 characters." }),
  teamCount: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .regex(/^\d+$/, "Team Count must be a valid number.")
    .optional(),
  participationType: z.enum(["team", "solo"], {
    message: "Please select if you are participating solo or as a team.",
  }),
});

// Map step indices to field names
const stepField: Record<number, keyof z.infer<typeof FormSchema>> = {
  0: "participationType",
  1: "teamName",
  2: "teamCount",
};

type FormData = z.infer<typeof FormSchema>;

const ApplyPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { teamName, teamCount, participationType} = useSelector((state: RootState) => state.apply); 

  const {
    register,
    watch,
    setError,
    trigger,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamName,  // Set default values from the Redux store
      teamCount: teamCount?.toString() || "",  // Convert to string for form input
      participationType,
    },
  });

  const [step, setStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Move to the next step
  const nextStep = async () => {
    const field = stepField[step];
    const isValid = await trigger(field);

    if (isValid) {
      clearErrors(field);
      setCompletedSteps((prev) => [...prev, step]);

      if (step === 2 && participationType === "team") {
        // Navigate to the VerifyTeamsPage with teamCount as query
        const teamCount = parseInt(getValues("teamCount") || "0", 10);
        router.push(`/registrations/verifyteams?teamCount=${teamCount}`);
      } else {
        setStep((prev) => prev + 1);
      }
    } else {
      setError(field, {
        type: "manual",
        message: `${field === "teamName" ? "Team Name" : "Team Count"} is invalid.`,
      });
    }
  };

  // Watch field values
  const { participationType: watchedParticipationType } = watch();

  // Dispatch actions when form fields change
  useEffect(() => {
    if (watchedParticipationType) {
      dispatch(setParticipationType(watchedParticipationType));
    }
  }, [watchedParticipationType, dispatch]);

  useEffect(() => {
    if (getValues("teamName")) {
      dispatch(setTeamName(getValues("teamName")));
    }
  }, [getValues("teamName"), dispatch]);

  useEffect(() => {
    if (getValues("teamCount")) {
      dispatch(setTeamCount(parseInt(getValues("teamCount"), 10)));
    }
  }, [getValues("teamCount"), dispatch]);

  return (
    <div className="bg-corner-glow min-h-screen">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center font-mono p-4">
        <div className="w-full sm:w-[613px] bg-custom-gradient p-5 rounded-xl mt-20 border border-gray-600 flex flex-col gap-2">
          <div className="text-[24] md:text-[26px] mb-6">
            <p>
              Hack $DAY <span className="text-[#06C270]">@Pondy</span> - Application
            </p>
          </div>

          {/* Step 1: Participation Type */}
          {step >= 0 && (
            <>
              <label className="text-[#06C270]">
                Are you participating solo or with your team?
              </label>
              <div className="flex gap-4 mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="team"
                    {...register("participationType")}
                    className="mr-2"
                  />
                  Team
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="solo"
                    {...register("participationType")}
                    className="mr-2"
                  />
                  Solo
                </label>
                <button
                  onClick={nextStep}
                  className="border w-[107px] rounded-xl text-white hover:bg-[#04A65C] transition-all"
                >
                  Continue
                </button>
              </div>
              {errors.participationType && (
                <p className="text-red-500 text-sm">{errors.participationType.message}</p>
              )}
            </>
          )}

          {/* Step 2: Team Name */}
          {step >= 1 && (
            <>
              <label htmlFor="teamName" className="text-[#06C270]">
                Team Name
              </label>
              <div className="flex flex-col md:flex-row gap-2 relative mb-2">
                <input
                  {...register("teamName")}
                  id="teamName"
                  placeholder="Enter your Team Name"
                  className={`w-full text-xl text-[#D9D9D9] leading-[32.68px] font-[400] bg-transparent border-[1.5px] py-2 pr-10 pl-2 focus:outline-none rounded-xl ${
                    completedSteps.includes(1) ? "border-[#06C270]" : ""
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") nextStep();
                  }}
                />
                <button
                  onClick={nextStep}
                  className="border w-full md:w-[107px] rounded-xl text-white hover:bg-[#04A65C] transition-all p-1 md:p-0"
                >
                  Continue
                </button>
              </div>
              {errors.teamName && (
                <p className="text-red-500 text-sm">{errors.teamName.message}</p>
              )}
            </>
          )}

          {/* Step 3: Team Count */}
          {step >= 2 && participationType === "team" && (
            <>
              <label htmlFor="teamCount" className="text-[#06C270]">
                How many members are there in your team?
              </label>
              <div className="flex flex-col md:flex-row gap-2 relative mb-2">
                <input
                  {...register("teamCount")}
                  id="teamCount"
                  placeholder="Enter number of members"
                  className={`w-full text-xl text-[#D9D9D9] leading-[32.68px] font-[400] bg-transparent border-[1.5px] py-2 pr-10 pl-2 focus:outline-none rounded-xl ${
                    completedSteps.includes(2) ? "border-[#06C270]" : ""
                  }`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") nextStep();
                  }}
                />
                <button
                  onClick={nextStep}
                  className="border w-full md:w-[107px] rounded-xl text-white hover:bg-[#04A65C] transition-all p-1 md:p-0"
                >
                  Continue
                </button>
              </div>
              {errors.teamCount && (
                <p className="text-red-500 text-sm">{errors.teamCount.message}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
