import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BookingFormData } from '../types';
import {
  CheckCircle2, Loader2, Send,
  Phone, Mail, MapPin, Check,
} from 'lucide-react';

import imgHero from '../assets/IMAGES/Serengeti/Serengeti 5.jpg';

export const Book: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Book Your Tanzania Safari | Mswahili Tours & Safaris';
    window.scrollTo({ top: 0 });
  }, []);

  const prefilledType   = searchParams.get('type')   || '';
  const prefilledDate   = searchParams.get('date')   || '';

  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>({
    defaultValues: {
      fullName: '', email: '', phone: '',
      tourType: prefilledType,
      travelDate: prefilledDate,
      travelers: '2',
      budgetRange: '',
      message: '',
    },
  });

  const onSubmit = async (_data: BookingFormData) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={imgHero} alt="Plan your safari"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns" />
        <div className="absolute inset-0 bg-[#050E1C]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/70 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.35em] uppercase mb-5 animate-fadeInUp stagger-1">
            Mswahili Tours &amp; Safaris
          </p>
          <h1
            className="text-white leading-[1.05] mb-6 animate-fadeInUp stagger-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 500,
              fontStyle: 'italic',
              textShadow: '0 2px 32px rgba(0,0,0,0.40)',
            }}
          >
            Plan Your Safari
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[16px] max-w-xl mx-auto leading-relaxed font-light animate-fadeInUp stagger-3">
            Tell us about your dream Tanzania adventure and our team will craft a personalised itinerary just for you.
          </p>
        </div>
      </section>

      {/* ══ 2. FORM + SIDEBAR ════════════════════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">

            {/* ── FORM ─────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-[#EAE4D9] p-5 sm:p-8 lg:p-10">

              {isSubmitted ? (
                /* Success */
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#C8A45C]/10 border border-[#C8A45C]/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#C8A45C]" />
                  </div>
                  <h2 className="font-bold tracking-[0.06em] uppercase text-[#1B2A4A] mb-3"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                    Asante! We'll Be In Touch
                  </h2>
                  <div className="w-10 h-[3px] bg-[#C8A45C] mx-auto mb-6" />
                  <p className="text-[#4A4035] text-[15px] leading-[1.9] max-w-sm mx-auto mb-8">
                    Your inquiry has been received. Our safari team will send your custom proposal within 24 hours.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); reset(); }}
                    className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] text-white text-[12px] font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-sm transition-colors duration-200">
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">
                    Booking Inquiry
                  </p>
                  <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-2"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                    Tell Us About Your Trip
                  </h2>
                  <div className="w-10 h-[3px] bg-[#C8A45C] mb-8" />

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Row 1 — Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" required error={errors.fullName?.message}>
                        <input type="text" placeholder="John Doe"
                          className={inputCls(!!errors.fullName)}
                          {...register('fullName', { required: 'Full name is required' })} />
                      </Field>
                      <Field label="Email Address" required error={errors.email?.message}>
                        <input type="email" placeholder="john@example.com"
                          className={inputCls(!!errors.email)}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                          })} />
                      </Field>
                    </div>

                    {/* Row 2 — Phone + Tour Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Phone Number" required error={errors.phone?.message}>
                        <input type="tel" placeholder="+255 XXX XXX XXX"
                          className={inputCls(!!errors.phone)}
                          {...register('phone', { required: 'Phone is required' })} />
                      </Field>
                      <Field label="Tour Type" required>
                        <select className={inputCls(false)} {...register('tourType', { required: true })}>
                          <option value="">Select tour type</option>
                          <option value="serengeti-ngorongoro">Serengeti &amp; Ngorongoro Safari</option>
                          <option value="kilimanjaro-machame">Kilimanjaro – Machame Route</option>
                          <option value="kilimanjaro-lemosho">Kilimanjaro – Lemosho Route</option>
                          <option value="kilimanjaro-marangu">Kilimanjaro – Marangu Route</option>
                          <option value="kilimanjaro-rongai">Kilimanjaro – Rongai Route</option>
                          <option value="zanzibar-beach">Zanzibar Beach Holiday</option>
                          <option value="southern-circuit">Southern Circuit Safari</option>
                          <option value="safari-zanzibar">Safari + Zanzibar Combo</option>
                          <option value="custom-tailored">Custom Tailored Itinerary</option>
                        </select>
                      </Field>
                    </div>

                    {/* Row 3 — Date + Travelers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Preferred Travel Date" required error={errors.travelDate?.message}>
                        <input type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className={inputCls(!!errors.travelDate)}
                          {...register('travelDate', { required: 'Travel date is required' })} />
                      </Field>
                      <Field label="Number of Travelers">
                        <select className={inputCls(false)} {...register('travelers')}>
                          <option value="1">1 Traveler</option>
                          <option value="2">2 Travelers</option>
                          <option value="3-4">3 – 4 Travelers</option>
                          <option value="5-8">5 – 8 Travelers</option>
                          <option value="9+">9+ Travelers</option>
                        </select>
                      </Field>
                    </div>

                    {/* Budget */}
                    <Field label="Budget Range (per person)">
                      <select className={inputCls(false)} {...register('budgetRange')}>
                        <option value="">Select budget range</option>
                        <option value="2000-3500">$2,000 – $3,500</option>
                        <option value="3500-5500">$3,500 – $5,500</option>
                        <option value="5500-8000">$5,500 – $8,000</option>
                        <option value="8000+">$8,000+</option>
                      </select>
                    </Field>

                    {/* Message */}
                    <Field label="Tell Us About Your Dream Safari">
                      <textarea rows={4}
                        placeholder="Share your interests, special requests, or questions..."
                        className={inputCls(false) + ' resize-none'}
                        {...register('message')} />
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] disabled:opacity-60 text-white text-[12.5px] font-bold tracking-[0.18em] uppercase py-4 rounded-sm transition-colors duration-200 shadow-[0_2px_12px_rgba(27,42,74,0.20)]">
                      {isSubmitting
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                        : <><Send className="w-4 h-4" /> Submit Inquiry</>
                      }
                    </button>

                  </form>
                </>
              )}
            </div>

            {/* ── SIDEBAR ──────────────────────────── */}
            <div className="space-y-6 lg:sticky lg:top-[120px]">

              {/* Why book with us */}
              <div className="bg-white rounded-2xl border border-[#EAE4D9] p-7">
                <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.32em] uppercase mb-4">
                  Why Book With Us
                </p>
                <h3 className="font-bold tracking-[0.06em] uppercase text-[#1B2A4A] mb-4"
                  style={{ fontSize: '1rem' }}>
                  Trust &amp; Transparency
                </h3>
                <div className="w-7 h-[2px] bg-[#C8A45C] mb-5" />
                <ul className="space-y-3.5">
                  {[
                    'Free customised itinerary',
                    'No hidden fees or surcharges',
                    'Flexible payment plans',
                    '24/7 dedicated trip advisor',
                    'TANAPA & TTB licensed operator',
                    'AMREF emergency medical cover',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C8A45C]/15 border border-[#C8A45C]/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#C8A45C]" />
                      </div>
                      <span className="text-[#4A4035] text-[14px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-[#1B2A4A] rounded-2xl p-7">
                <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.32em] uppercase mb-4">
                  Reach Us Directly
                </p>
                <div className="space-y-4">
                  {[
                    { Icon: Phone, text: '+255 750 877 628',           href: 'tel:+255750877628' },
                    { Icon: Mail,  text: 'info@mswahilitours.co.tz',   href: 'mailto:info@mswahilitours.co.tz' },
                    { Icon: MapPin,text: 'Arusha, Tanzania',           href: '#' },
                  ].map(({ Icon, text, href }) => (
                    <a key={text} href={href}
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group">
                      <div className="w-8 h-8 rounded-xl bg-[#C8A45C]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A45C]/25 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-[#C8A45C]" />
                      </div>
                      <span className="text-[14px] font-medium">{text}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

/* ── Helpers ─────────────────────────────────────── */
const inputCls = (hasError: boolean) => [
  'w-full rounded-xl border bg-white px-4 py-3',
  'text-[14px] text-[#1B2A4A] placeholder:text-[#9B8E80]',
  'focus:outline-none focus:ring-2 focus:ring-[#C8A45C]/30 focus:border-[#C8A45C]',
  'transition-colors duration-200',
  hasError ? 'border-red-400' : 'border-[#EAE4D9] hover:border-[#C8A45C]/50',
].join(' ');

const Field: React.FC<{
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}> = ({ label, required, error, children }) => (
  <div>
    <label className="block text-[12px] font-bold tracking-[0.18em] uppercase text-[#6B6259] mb-1.5">
      {label}{required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    {children}
    {error && <p className="mt-1.5 text-[12.5px] text-red-500">{error}</p>}
  </div>
);
