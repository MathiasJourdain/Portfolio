import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours... ⏳');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      // Ton endpoint Formspree est intégré ici
      const response = await fetch('https://formspree.io/f/xkodeedk', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('Message envoyé avec succès ! 🚀 Je vous réponds vite.');
        form.reset(); // Vide le formulaire après l'envoi
      } else {
        setStatus("Oups, une erreur est survenue lors de l'envoi. ❌");
      }
    } catch (error) {
      setStatus("Erreur réseau, vérifiez votre connexion. ❌");
    }
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-2xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Prêt à <span className="text-blue-400">Collaborer</span> ?</h3>
      <p className="text-slate-400 mb-10">
        Vous avez un projet de développement ou une idée d'application ? Discutons-en pour transformer votre vision en réalité technique.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        
        <input 
          type="text" 
          name="nom"
          required
          placeholder="Votre Nom" 
          className="w-full p-4 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 text-slate-200 transition-colors duration-300" 
        />
        
        <input 
          type="email" 
          name="email"
          required
          placeholder="Votre Email" 
          className="w-full p-4 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 text-slate-200 transition-colors duration-300" 
        />
        
        <textarea 
          name="message"
          rows="5" 
          required
          placeholder="Votre Message" 
          className="w-full p-4 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 text-slate-200 resize-none transition-colors duration-300"
        ></textarea>
        
        <button 
          type="submit" 
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg font-bold text-white transition-all shadow-lg mt-2 transform hover:-translate-y-1"
        >
          Envoyer le message
        </button>

        {status && (
          <p className="mt-4 text-center font-medium text-blue-300 animate-pulse">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}