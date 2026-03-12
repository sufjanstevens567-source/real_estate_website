"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <LabelledInput label="Full Name" name="fullName" autoComplete="name" />
        <LabelledInput label="Agency Name" name="agencyName" autoComplete="organization" />
        <LabelledInput label="Work Email" name="email" type="email" autoComplete="email" />
        <LabelledInput label="Phone Number" name="phone" type="tel" autoComplete="tel" />
        <LabelledInput label="Agency Website" name="website" type="url" autoComplete="url" />
        <LabelledInput
          label="Property Link or Listing URL"
          name="listingUrl"
          type="url"
          autoComplete="url"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <LabelledSelect
          label="What are you interested in?"
          name="interest"
          options={["Listing Video", "Potential Video", "Not Sure Yet"]}
        />
        <LabelledSelect
          label="What is the main goal?"
          name="goal"
          options={[
            "Listing Marketing",
            "Vendor Pitch",
            "Social Content",
            "Showing Potential",
            "Other",
          ]}
        />
      </div>

      <label className="grid gap-3">
        <span className="text-[1.25rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
          Message
        </span>
        <textarea
          name="message"
          rows={5}
          className="field min-h-44 rounded-[2rem]"
          placeholder="Tell us about the property, the audience, or what you want to test first."
        />
      </label>

      <div className="flex flex-col items-start gap-4 pt-2">
        <button type="submit" className="primary-button">
          Request Pricing
        </button>
        <p className="max-w-[42rem] text-[1.5rem] leading-[1.6] text-[rgba(82,39,23,0.7)]">
          We&apos;ll review the brief and come back with the most suitable option for your
          agency.
        </p>
        <p className="text-[1.3rem] font-semibold uppercase tracking-[0.16em] text-[#8a4b30]">
          Prefer a quick start? Send a Listing.
        </p>
        {submitted ? (
          <p className="rounded-full bg-[#fff1d1] px-4 py-3 text-[1.4rem] font-medium text-[#522717]">
            Demo submission captured. Replace this handler with your CRM or email workflow.
          </p>
        ) : null}
      </div>
    </form>
  );
}

type InputProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
};

function LabelledInput({
  label,
  name,
  type = "text",
  autoComplete,
}: InputProps) {
  return (
    <label className="grid gap-3">
      <span className="text-[1.25rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
        {label}
      </span>
      <input name={name} type={type} autoComplete={autoComplete} className="field" />
    </label>
  );
}

function LabelledSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="grid gap-3">
      <span className="text-[1.25rem] font-semibold uppercase tracking-[0.18em] text-[#8a4b30]">
        {label}
      </span>
      <select name={name} defaultValue="" className="field">
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
