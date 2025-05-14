import { useState } from "react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the server
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form and submission status after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        notes: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="book" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Schedule your visit with one of our expert barbers and experience
            premium grooming services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-black/15  rounded-lg shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-green-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-playfair font-bold mb-2 text-gray-900 dark:text-white">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for your booking. We will confirm your appointment
                shortly.
              </p>
            </div>
          ) : (
            <form
              id="booking-form"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-800 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-800 dark:text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-800 dark:text-white"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Select Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="classic-haircut">
                      Classic Haircut - $35
                    </option>
                    <option value="hot-towel-shave">
                      Hot Towel Shave - $45
                    </option>
                    <option value="beard-trim">Beard Trim & Shape - $25</option>
                    <option value="hair-coloring">Hair Coloring - $65+</option>
                    <option value="deluxe-package">Deluxe Package - $85</option>
                    <option value="kids-haircut">Kid's Haircut - $25</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Special Instructions (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-800 dark:text-white"
                  placeholder="Any specific requests or details we should know about..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gold text-white font-medium rounded hover:!bg-[#b38600] transition"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
