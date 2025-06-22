import React from 'react';

const ContactView: React.FC = () => (
  <section id="contact-section" className="py-10">
    {/* font-display-strong removed, h1 gets Oswald globally */}
    <h1 className="uppercase text-3xl sm:text-4xl mb-8 text-center text-indigo-400">Get In Touch</h1>
    <div className="max-w-xl mx-auto bg-slate-800 p-6 sm:p-8 rounded-xl shadow-xl">
      {/* Paragraph will inherit text-gray-300 from body */}
      <p className="mb-6 text-center"> 
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">Full Name</label> 
          <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-700 text-slate-100 placeholder-gray-500" placeholder="John Doe" /> 
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email Address</label> 
          <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-700 text-slate-100 placeholder-gray-500" placeholder="you@example.com" /> 
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label> 
          <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-700 text-slate-100 placeholder-gray-500" placeholder="Your message..."></textarea> 
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-800 transition-colors">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactView;