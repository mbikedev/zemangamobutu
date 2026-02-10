"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    setLoading(true);
    setError("");

    try {
      // Send via your styled email API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setError(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-100/40 to-primary-100/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-100/30 to-accent-100/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Vous avez une question ou souhaitez collaborer ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center lg:text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                <Mail className="w-7 h-7 text-primary-600 group-hover:text-accent-600 transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Contactez-nous par email
              </p>
              <a
                href="mailto:info@mobutuzemanga.com"
                className="text-primary-700 hover:text-accent-500 font-medium text-sm transition-colors underline"
              >
                info@mobutuzemanga.com
              </a>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100 text-center lg:text-left">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-primary-700 font-semibold">Réponse rapide</strong>
                <br />
                Nous nous engageons à vous répondre dans les 24 heures ouvrées.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              {submitted ? (
                <Alert className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200">
                  <CheckCircle className="h-6 w-6 text-secondary-600" />
                  <AlertTitle className="text-secondary-700 font-bold text-xl">
                    Merci pour votre message !
                  </AlertTitle>
                  <AlertDescription className="text-gray-700 mt-2">
                    Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.
                  </AlertDescription>
                </Alert>
              ) : (
                <>
                  {error && (
                    <Alert className="bg-red-50 border-red-200 mb-6">
                      <AlertDescription className="text-red-600 font-medium">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) =>
                        setFormData({ ...formData, honeypot: e.target.value })
                      }
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-semibold flex items-center gap-2">
                        <User className="w-4 h-4 text-primary-600" />
                        Nom complet
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Votre nom"
                        className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary-600" />
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="votre@email.com"
                        className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-semibold flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary-600" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Décrivez votre demande en détail..."
                        className="resize-none border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-purple-300 to-orange-400 hover:from-orange-800 hover:to-orange-900 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 h-12 text-base font-bold"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span>
                          Envoi en cours...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
