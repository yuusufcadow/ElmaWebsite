import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
  ReactNode,
} from "react";

import Footer from "../Footer";

const volunteerApplicationUrl =
  "http://elmanpeace.org/wp-content/uploads/2017/06/Volunteer-Application-Form-Elman-Peace.pdf";

type FormFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

type FileUploadProps = {
  id: string;
  label: string;
  accept: string;
  fileName: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M7 3h7l4 4v14H7V3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h5M10 12h5M10 16h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M12 16V5m0 0-4 4m4-4 4 4M5 16v4h14v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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

function FormField({
  id,
  label,
  children,
}: FormFieldProps) {
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

function FileUpload({
  id,
  label,
  accept,
  fileName,
  onChange,
}: FileUploadProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-black">
        {label}
      </p>

      <label
        htmlFor={id}
        className="group flex min-h-[96px] cursor-pointer items-center justify-between gap-5 border border-neutral-300 bg-white px-5 py-4 transition-colors duration-200 hover:border-[#008f8a] focus-within:border-[#008f8a]"
      >
        <input
          id={id}
          name={id}
          type="file"
          accept={accept}
          required
          onChange={onChange}
          className="sr-only"
        />

        <div className="flex min-w-0 items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-neutral-100 text-neutral-600 transition-colors duration-200 group-hover:bg-[#008f8a]/10 group-hover:text-[#008f8a]">
            <DocumentIcon />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-sm font-medium text-black">
              {fileName || "Choose document"}
            </span>

            <span className="mt-1 block text-xs text-neutral-500">
              {fileName ? "Document selected" : "Select from your device"}
            </span>
          </span>
        </div>

        <span className="shrink-0 text-neutral-400 transition-colors duration-200 group-hover:text-[#008f8a]">
          <UploadIcon />
        </span>
      </label>
    </div>
  );
}

function Volunteer() {
  const [applicationFileName, setApplicationFileName] =
    useState("");

  const [resumeFileName, setResumeFileName] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleApplicationChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setApplicationFileName(
      event.target.files?.[0]?.name ?? ""
    );
  };

  const handleResumeChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setResumeFileName(
      event.target.files?.[0]?.name ?? ""
    );
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setIsSubmitting(true);

    try {
      console.log(
        "Volunteer application",
        Object.fromEntries(formData)
      );

      // Connect formData to your backend API here.
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "h-12 w-full border border-neutral-300 bg-white px-4 text-base text-black outline-none transition-colors duration-200 placeholder:text-neutral-400 focus:border-[#008f8a]";

  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008f8a] sm:text-sm">
                Get Involved
              </p>

              <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
                Volunteer with Elman Peace
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
                Download the application, complete it, and
                submit it with your CV.
              </p>
            </header>

            <section className="mt-12 border-t border-neutral-300 sm:mt-14 lg:mt-16">
              {/* Step One */}
              <div className="grid gap-6 border-b border-neutral-300 py-9 sm:grid-cols-[72px_1fr] sm:gap-8 sm:py-11">
                <div>
                 
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Download
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-black sm:text-3xl">
                    Volunteer application
                  </h2>

                  <a
                    href={volunteerApplicationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-between bg-[#009f9a] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#007f7b] sm:w-auto sm:min-w-[230px]"
                  >
                    <span>Download form</span>
                    <DownloadIcon />
                  </a>
                </div>
              </div>

              {/* Step Two */}
              <div className="grid gap-6 py-9 sm:grid-cols-[72px_1fr] sm:gap-8 sm:py-11">
                <div>
                  
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Submit
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-black sm:text-3xl">
                    Submit your application
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="mt-7"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="firstName"
                        label="First name"
                      >
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                          className={inputClassName}
                        />
                      </FormField>

                      <FormField
                        id="lastName"
                        label="Last name"
                      >
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                          className={inputClassName}
                        />
                      </FormField>

                      <FormField
                        id="email"
                        label="Email address"
                      >
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className={inputClassName}
                        />
                      </FormField>

                      <FormField
                        id="position"
                        label="Position of interest"
                      >
                        <input
                          id="position"
                          name="position"
                          type="text"
                          required
                          className={inputClassName}
                        />
                      </FormField>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <FileUpload
                        id="volunteerApplication"
                        label="Completed application"
                        accept=".pdf,application/pdf"
                        fileName={applicationFileName}
                        onChange={handleApplicationChange}
                      />

                      <FileUpload
                        id="resume"
                        label="CV or résumé"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        fileName={resumeFileName}
                        onChange={handleResumeChange}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-7 inline-flex min-h-12 w-full items-center justify-between bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#008f8a] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[230px]"
                    >
                      <span>
                        {isSubmitting
                          ? "Submitting..."
                          : "Submit application"}
                      </span>

                      {!isSubmitting && <SendIcon />}
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Volunteer;