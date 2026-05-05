import { useState } from "react";

import { sendContactForm } from "../services/api";

const useContactForm = (id) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      setLoading(true);

      await sendContactForm(id, formData);

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return { status, handleSubmit, loading };
};

export default useContactForm;
