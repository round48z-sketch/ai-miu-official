"use client";

import { useState, type FormEvent } from "react";
import { contactCategories, contactCopy } from "@/content/contact";

type FormStatus = "idle" | "success" | "error";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const emptyForm = {
  name: "",
  email: "",
  category: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const honeypot = form.elements.namedItem("botcheck");
    const botChecked = honeypot instanceof HTMLInputElement && honeypot.checked;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    setSubmitting(true);
    setStatus("idle");

    if (botChecked) {
      setValues(emptyForm);
      form.reset();
      setStatus("success");
      setSubmitting(false);
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: contactCopy.subject,
          from_name: "AIみう公式サイト",
          name: values.name.trim(),
          email: values.email.trim(),
          category: values.category,
          message: values.message.trim(),
          botcheck: false,
        }),
      });

      const result = (await response.json()) as Web3FormsResponse;

      if (response.ok && result.success) {
        setValues(emptyForm);
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} aria-busy={submitting}>
      <input
        type="checkbox"
        name="botcheck"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="contact-form__field">
        <label htmlFor="contact-name">
          お名前
          <span className="contact-form__req">必須</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={80}
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          disabled={submitting}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">
          メールアドレス
          <span className="contact-form__req">必須</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={120}
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          disabled={submitting}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-category">
          お問い合わせ種別
          <span className="contact-form__req">必須</span>
        </label>
        <select
          id="contact-category"
          name="category"
          required
          value={values.category}
          onChange={(event) => setValues((current) => ({ ...current, category: event.target.value }))}
          disabled={submitting}
        >
          <option value="" disabled>
            選択してください
          </option>
          {contactCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">
          お問い合わせ内容
          <span className="contact-form__req">必須</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={7}
          maxLength={4000}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          disabled={submitting}
        />
      </div>

      <button className="btn contact-form__submit" type="submit" disabled={submitting}>
        {submitting ? "送信中..." : "送信する"}
      </button>

      <p
        className={`contact-form__status${status === "error" ? " is-error" : ""}${status === "success" ? " is-success" : ""}`}
        role="status"
        aria-live="polite"
      >
        {status === "success" ? contactCopy.success : null}
        {status === "error" ? contactCopy.error : null}
      </p>
    </form>
  );
}
