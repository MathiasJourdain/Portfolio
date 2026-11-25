import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Envoi en cours...');
    const form = event.target;

    try {
      const response = await fetch('https://formspree.io/f/xkodeedk', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('Message envoyé. Merci, je vous répondrai rapidement.');
        form.reset();
      } else {
        setStatus("Une erreur est survenue lors de l'envoi.");
      }
    } catch {
      setStatus('Erreur réseau. Vérifiez votre connexion.');
    }
  };

  return (
    <section id="contact" className="contact-section reveal px-6 py-24">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">Me contacter</p>
          <h3>Un projet en tête ?<br /><span>Construisons-le ensemble.</span></h3>
          <p>Présentez-moi votre idée, votre besoin précis ou votre problème à résoudre.</p>
          <div className="availability"><span />Disponible pour de nouvelles collaborations</div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Nom<input type="text" name="nom" required placeholder="Votre nom" /></label>
          <label>Email<input type="email" name="email" required placeholder="vous@exemple.com" /></label>
          <label>Message<textarea name="message" rows="5" required placeholder="Parlez-moi de votre projet..." /></label>
          <button type="submit">Envoyer le message <span>↗</span></button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
