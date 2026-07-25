import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

import Footer from "../Footer";

const partnershipPriorities = [
  "Vocational Skills Training & Job Creation through Technology and Innovation",
  "Social Entrepreneurship and Economic Empowerment through Enterprise Development",
  "Experimental & Creative Therapy for Psychosocial Healing through the Arts",
  "Youth Leadership & Peer-to-Peer Mentorship",
  "Child Protection and Rehabilitation of Children in Armed Conflict",
  "Ending Violence Against Women & Girls",
  "Implementation of UNSCR Resolutions 1325 & 2250",
  "Infrastructure and Community Development for Peace",
];

type FormFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

type RadioQuestionProps = {
  name: string;
  question: string;
};

function FormField({ id, label, children }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-black"
      >
        {label}
      </label>

      {children}
    </div>
  );
}

function RadioQuestion({ name, question }: RadioQuestionProps) {
  return (
    <fieldset>
      <legend className="text-sm font-medium leading-6 text-black sm:text-base">
        {question}
      </legend>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <label className="group flex cursor-pointer items-center gap-3 border border-neutral-300 px-4 py-3 transition-colors hover:border-[#008f8a] has-[:checked]:border-[#008f8a] has-[:checked]:bg-[#008f8a]/5">
          <input
            type="radio"
            name={name}
            value="yes"
            required
            className="h-4 w-4 accent-[#008f8a]"
          />

          <span className="text-sm font-medium text-neutral-700 group-has-[:checked]:text-black">
            Yes
          </span>
        </label>

        <label className="group flex cursor-pointer items-center gap-3 border border-neutral-300 px-4 py-3 transition-colors hover:border-[#008f8a] has-[:checked]:border-[#008f8a] has-[:checked]:bg-[#008f8a]/5">
          <input
            type="radio"
            name={name}
            value="no"
            required
            className="h-4 w-4 accent-[#008f8a]"
          />

          <span className="text-sm font-medium text-neutral-700 group-has-[:checked]:text-black">
            No
          </span>
        </label>
      </div>
    </fieldset>
  );
}

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M3 10h13M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PartnershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      console.log(
        "Partnership request",
        Object.fromEntries(formData)
      );

      // Connect formData to your backend API here.
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "h-12 w-full border border-neutral-300 bg-white px-4 text-base text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#008f8a]";

  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <header className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008f8a] sm:text-sm">
                Get Involved
              </p>

              <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
                Partnerships
              </h1>
            </header>

            <section className="mt-10 border-t border-neutral-300 pt-9 sm:mt-12 sm:pt-10">
              <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.02em] text-black sm:text-3xl">
                    Partner With Us
                  </h2>
                </div>

                <div className="space-y-5 text-base leading-8 text-neutral-700">
                  <p>
                    Elman Peace is a leading awards-winning institution. We are
                    internationally recognized for our reputation and proven
                    record to generate real change on a local, national, and
                    international scale.
                  </p>

                  <p>
                    Our future plans include expansion throughout Africa and the
                    Middle East, investing in safer, healthier communities,
                    training skilled workers, and a better educated generation
                    of future leaders.
                  </p>

                  <p className="font-medium text-black">
                    Be a part of this visible change by partnering with Elman
                    Peace in the following sectors of institutional priorities:
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-200">
                {partnershipPriorities.map((priority, index) => (
                  <div
                    key={priority}
                    className="grid grid-cols-[42px_1fr] gap-3 border-b border-neutral-200 py-4 sm:grid-cols-[58px_1fr] sm:py-5"
                  >
                    <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-medium leading-7 text-black sm:text-base">
                      {priority}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 border-t border-neutral-300 pt-9 sm:mt-14 sm:pt-10">
              <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008f8a]">
                    Work With Us
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-black sm:text-3xl">
                    Partnership Form
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField id="name" label="Name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className={inputClassName}
                      />
                    </FormField>

                    <FormField id="email" label="Email address">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className={inputClassName}
                      />
                    </FormField>
                  </div>

                  <RadioQuestion
                    name="institutionalPriorities"
                    question="Are you interested in partnering with us on one or more of our institutional priorities listed above?"
                  />

                  <RadioQuestion
                    name="otherCollaboration"
                    question="Do you have an idea for a collaboration with us not listed above?"
                  />

                  <FormField id="message" label="Message">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full resize-y border border-neutral-300 bg-white px-4 py-3 text-base leading-7 text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#008f8a]"
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-12 w-full items-center justify-between bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#008f8a] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[220px]"
                  >
                    <span>
                      {isSubmitting
                        ? "Submitting..."
                        : "Send request"}
                    </span>

                    {!isSubmitting && <SendIcon />}
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default PartnershipForm;