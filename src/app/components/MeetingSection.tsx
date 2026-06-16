'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

const TIME_SLOTS_AM = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
const TIME_SLOTS_PM = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

const DAYS_ES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MONTHS_ES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];



export default function MeetingSection() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', topic: '' });
  const [step, setStep] = useState(1); // 1: calendar, 2: form

  // Generate next 14 days (skip sundays)
  const availableDays = useMemo(() => {
    const days: { date: Date; dateStr: string; dayName: string; dayNum: number; month: string }[] = [];
    const today = new Date();
    let d = new Date(today);
    d.setDate(d.getDate() + 1); // start from tomorrow
    while (days.length < 14) {
      if (d.getDay() !== 0) { // skip Sunday
        days.push({
          date: new Date(d),
          dateStr: d.toISOString().split('T')[0],
          dayName: DAYS_ES[d.getDay()],
          dayNum: d.getDate(),
          month: MONTHS_ES[d.getMonth()]
        });
      }
      d.setDate(d.getDate() + 1);
    }
    return days;
  }, []);

  const selectedDateObj = availableDays.find(d => d.dateStr === selectedDate);

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.phone) return;

    const dateFormatted = selectedDateObj
      ? `${selectedDateObj.dayName} ${selectedDateObj.dayNum} de ${selectedDateObj.month}`
      : selectedDate;

    const message = `*SOLICITUD DE REUNION - ZOOM*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `*DATOS DE CONTACTO*\n` +
      `- Nombre: ${formData.name}\n` +
      `- Empresa: ${formData.company || 'No especificada'}\n` +
      `- Email: ${formData.email || 'No proporcionado'}\n` +
      `- Telefono: ${formData.phone}\n\n` +
      `*DETALLES DE LA REUNION*\n` +
      `- Fecha: ${dateFormatted}\n` +
      `- Hora: ${selectedTime}\n` +
      `- Tema: ${formData.topic || 'Consulta general'}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Solicito agendar una reunion via Zoom.\nQuedo atento a la confirmacion.`;

    const phone = '593980001234';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const canProceed = selectedDate && selectedTime;
  const canSubmit = formData.name && formData.phone;

  return (
    <section id="agendar-reunion" style={{ position: 'relative', padding: '6rem 0', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(160deg, #0b1320 0%, #0f2840 40%, #0d6978 100%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/meeting-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 1 }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(237, 108, 35, 0.06), transparent 40%), radial-gradient(circle at 70% 20%, rgba(13, 105, 120, 0.08), transparent 40%)', zIndex: 2, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ color: 'var(--primary-orange)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>
            REUNIÓN VIRTUAL
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.2 }}>
            Agenda una Reunión <span style={{ color: 'var(--primary-orange)' }}>con Nosotros</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7 }}>
            Coordina una videollamada por Zoom con nuestro equipo técnico. Selecciona fecha, horario y envíanos tus datos.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.2)', borderRadius: '50px', padding: '8px 20px', marginTop: '1rem' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span style={{ color: '#25D366', fontSize: '0.82rem', fontWeight: 600 }}>La confirmacion se realizara por WhatsApp</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: step === 1 ? '1fr' : '1fr 1fr',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Left: Calendar + Time */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '2rem',
            transition: 'all 0.4s ease'
          }}>
            {/* Zoom badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #2D8CFF, #0B5CFF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M4 3h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm14 4l4-2v10l-4-2V7z" />
                </svg>
              </div>
              <div>
                <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}>Reunión vía Zoom</span>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>Duración: 30 min</span>
              </div>
            </div>

            {/* Step indicator */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  flex: 1, height: '3px', borderRadius: '2px',
                  background: step >= s ? 'var(--primary-orange)' : 'rgba(255,255,255,0.1)',
                  transition: 'background 0.3s ease'
                }} />
              ))}
            </div>

            {step === 1 ? (
              <>
                {/* Calendar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                    Selecciona una fecha
                  </h4>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>Horario Ecuador (GMT-5)</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', marginBottom: '1.8rem' }}>
                  {availableDays.map((day) => {
                    const isSelected = selectedDate === day.dateStr;
                    const isToday = false;
                    return (
                      <motion.button
                        key={day.dateStr}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setSelectedDate(day.dateStr); setSelectedTime(null); }}
                        style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
                          padding: '8px 4px', borderRadius: '12px', border: 'none', cursor: 'pointer',
                          background: isSelected
                            ? 'linear-gradient(135deg, var(--primary-orange), #ff8c42)'
                            : 'rgba(255,255,255,0.04)',
                          color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)',
                          transition: 'all 0.2s ease',
                          outline: isSelected ? 'none' : undefined
                        }}
                      >
                        <span style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', opacity: isSelected ? 1 : 0.6 }}>
                          {day.dayName}
                        </span>
                        <span style={{ fontSize: '1.15rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                          {day.dayNum}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                      Horarios disponibles — {selectedDateObj?.dayName} {selectedDateObj?.dayNum} de {selectedDateObj?.month}
                    </h4>

                    {/* Morning */}
                    <div style={{ marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', display: 'block' }}>
                        Manana (08:00 - 12:00)
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {TIME_SLOTS_AM.map(time => {
                          const isSelected = selectedTime === time;
                          return (
                            <motion.button
                              key={time}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedTime(time)}
                              style={{
                                padding: '8px 14px', borderRadius: '8px',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700,
                                background: isSelected
                                  ? 'linear-gradient(135deg, var(--primary-teal), #0a5260)'
                                  : 'rgba(255,255,255,0.06)',
                                color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)',
                                border: isSelected ? '1px solid var(--primary-teal)' : '1px solid rgba(255,255,255,0.06)',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              {time}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', display: 'block' }}>
                        Tarde (13:00 - 17:00)
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {TIME_SLOTS_PM.map(time => {
                          const isSelected = selectedTime === time;
                          return (
                            <motion.button
                              key={time}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedTime(time)}
                              style={{
                                padding: '8px 14px', borderRadius: '8px',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700,
                                background: isSelected
                                  ? 'linear-gradient(135deg, var(--primary-teal), #0a5260)'
                                  : 'rgba(255,255,255,0.06)',
                                color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)',
                                border: isSelected ? '1px solid var(--primary-teal)' : '1px solid rgba(255,255,255,0.06)',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              {time}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Continue button */}
                {canProceed && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStep(2)}
                    style={{
                      width: '100%', marginTop: '1.5rem', padding: '1rem',
                      borderRadius: '12px', border: 'none', cursor: 'pointer',
                      background: 'linear-gradient(135deg, var(--primary-orange), #ff8c42)',
                      color: '#fff', fontSize: '1rem', fontWeight: 800,
                      fontFamily: 'var(--font-heading)', letterSpacing: '1px',
                      textTransform: 'uppercase',
                      boxShadow: '0 8px 25px rgba(237, 108, 35, 0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                    }}
                  >
                    CONTINUAR
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.button>
                )}
              </>
            ) : (
              <>
                {/* Summary */}
                <div style={{
                  background: 'rgba(13, 105, 120, 0.1)', border: '1px solid rgba(13, 105, 120, 0.2)',
                  borderRadius: '14px', padding: '1.2rem', marginBottom: '1.2rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--primary-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Fecha seleccionada</span>
                      <p style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, margin: '4px 0 0' }}>
                        {selectedDateObj?.dayName} {selectedDateObj?.dayNum} de {selectedDateObj?.month} — {selectedTime}
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      style={{
                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px', padding: '6px 12px', color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-heading)'
                      }}
                    >
                      Cambiar
                    </button>
                  </div>
                </div>

                <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  Resumen de tu reunión
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  Verifica los datos antes de enviar.
                </p>
              </>
            )}
          </div>

          {/* Right: Form (only in step 2) */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '2rem'
              }}
            >
              <h4 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Tus Datos
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    placeholder="Tu nombre"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff', fontSize: '0.95rem', outline: 'none',
                      fontFamily: 'inherit', transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-teal)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Company */}
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                    placeholder="Nombre de tu empresa"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff', fontSize: '0.95rem', outline: 'none',
                      fontFamily: 'inherit', transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-teal)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    placeholder="correo@empresa.com"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff', fontSize: '0.95rem', outline: 'none',
                      fontFamily: 'inherit', transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-teal)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    placeholder="+593 9XX XXX XXX"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff', fontSize: '0.95rem', outline: 'none',
                      fontFamily: 'inherit', transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-teal)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Topic */}
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Tema de la reunión
                  </label>
                  <textarea
                    value={formData.topic}
                    onChange={(e) => setFormData(p => ({ ...p, topic: e.target.value }))}
                    placeholder="Describe brevemente el motivo de la reunión..."
                    rows={3}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff', fontSize: '0.95rem', outline: 'none',
                      fontFamily: 'inherit', transition: 'border-color 0.2s ease',
                      resize: 'vertical', boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-teal)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                {/* Submit via WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  style={{
                    width: '100%', padding: '1rem',
                    borderRadius: '12px', border: 'none', cursor: canSubmit ? 'pointer' : 'not-allowed',
                    background: canSubmit
                      ? 'linear-gradient(135deg, #25D366, #128C7E)'
                      : 'rgba(255,255,255,0.06)',
                    color: '#fff', fontSize: '1rem', fontWeight: 800,
                    fontFamily: 'var(--font-heading)', letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: canSubmit ? '0 8px 25px rgba(37, 211, 102, 0.25)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    opacity: canSubmit ? 1 : 0.4,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  ENVIAR POR WHATSAPP
                </motion.button>

                {/* Back button */}
                <button
                  onClick={() => setStep(1)}
                  style={{
                    background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'var(--font-heading)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    padding: '8px 0'
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                  </svg>
                  Volver al calendario
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
