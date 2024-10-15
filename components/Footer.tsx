import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {/* Contact Section */}
        <section className="bg-blue-50 dark:bg-slate-800 w-full py-16 sm:px-6 lg:px-8 lg:py-20 mt-10" id="contact">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                We are here to assist you with any questions or inquiries you may have.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <p className="text-lg text-gray-600 dark:text-slate-400">
                    Feel free to contact us for any business-related matters or just say hello!
                  </p>

                  {/* Contact Info */}
                  <ul className="mt-6 space-y-6">
                    <li className="flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Address</h3>
                        <p className="text-gray-600 dark:text-slate-400">
                         sector5c2 North Karachi, BilalTown,Pakistan
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path
                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                          ></path>
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact</h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          Mobile: +92 (33) 43096036 <br />
                          Mail: misbahshakil193@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 7v5l3 3"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Working hours</h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          Mon - Fri: 08:00 - 17:00 <br />
                          Sat & Sun: 08:00 - 12:00
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Form Section */}
                <div className="card bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold dark:text-white mb-4">Ready to Get Started?</h2>
                  <form
                action="https://formspree.io/f/meojwvge"
                method="POST"
>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:bg-slate-800 dark:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:bg-slate-800 dark:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoComplete="email"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="textarea"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        placeholder="Write your message..."
                        className="w-full p-3 rounded-lg border border-gray-300 dark:bg-slate-800 dark:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={5}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        {/* <div className="flex space-x-5 mt-10">
          {socialMedia.map((item) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.name}>
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
