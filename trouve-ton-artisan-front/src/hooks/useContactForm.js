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

      const res = await sendContactForm(id, formData);
      const data = await res.json();

      if (!res.ok) {
        if (data.error === "Email invalide") {
          setStatus("Adresse email invalide ❌");
        } else {
          setStatus("Une erreur est survenue, réessayez plus tard.");
        }
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("Erreur réseau, réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return { status, handleSubmit, loading };
};

export default useContactForm;
