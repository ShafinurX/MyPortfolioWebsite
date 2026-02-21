import React, { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const handleSendMessage = (e) => {
    e.preventDefault();

    // EmailJS দিয়ে ইমেইল পাঠানোর লজিক
    emailjs.sendForm(
      'service_ow0auwh',   // আপনার EmailJS Service ID এখানে বসান
      'template_j0jo1co',  // আপনার EmailJS Template ID এখানে বসান
      form.current,
      'jNbE9dIVPpbF72pcB'    // আপনার EmailJS Public Key এখানে বসান
    )
    .then((result) => {
        // মেসেজ সফলভাবে গেলে পপ-আপ দেখাবে
        Swal.fire({
          title: "Success!",
          text: "Thanks! I have received your message.",
          icon: "success",
          confirmButtonColor: "#00D1FF"
        });
        e.target.reset(); // ফর্মটি খালি করে দেবে
    }, (error) => {
        // এরর হলে দেখাবে
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error"
        });
    });
  };

  return (
    <div className="py-10 px-5 lg:px-20 min-h-screen bg-base-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* কন্টাক্ট ইনফরমেশন কার্ডস */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="flex items-center gap-4 bg-base-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary p-4 rounded-full text-white">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <p className="text-sm opacity-70">Phone</p>
                <a href="tel:+8801303312759" className="text-lg font-medium hover:text-primary">01303312759</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-base-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-secondary p-4 rounded-full text-white">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm opacity-70">Email</p>
                <a href="mailto:rahmanshafinur38@gmail.com" className="text-lg font-medium hover:text-primary">rahmanshafinur38@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-base-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-accent p-4 rounded-full text-white">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm opacity-70">Address</p>
                <p className="text-lg font-medium">Kaliakair, Gazipur, Bangladesh</p>
              </div>
            </div>

            <a 
              href="https://wa.me/8801303312759" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-success btn-block text-white gap-2 mt-4"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* মেসেজ ফর্ম */}
          <div className="bg-base-200 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send me a Message</h3>
            
            {/* form এ ref এবং onSubmit যোগ করা হয়েছে */}
            <form ref={form} onSubmit={handleSendMessage} className="space-y-4">
              <div className="form-control">
                <input 
                  type="text" 
                  name="from_name" // EmailJS টেমপ্লেটের সাথে মিল রেখে নাম
                  placeholder="Your Name" 
                  className="input input-bordered focus:input-primary" 
                  required 
                />
              </div>
              <div className="form-control">
                <input 
                  type="email" 
                  name="from_email" 
                  placeholder="Your Email" 
                  className="input input-bordered focus:input-primary" 
                  required 
                />
              </div>
              <div className="form-control">
                <textarea 
                  name="message" 
                  className="textarea textarea-bordered h-32 focus:textarea-primary" 
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block text-white">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;