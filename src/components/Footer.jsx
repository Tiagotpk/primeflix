import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="bg-theme flex justify-center bottom-0 mt-10 text-center">
        <div className="sm:w-full md:w-full w-1/2 py-10 sm:p-0">
          <div className="p-2 font-mont text-center text-gray-50">
            <p className="pb-2">Projetado e Desenvolvido por</p>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>

            <div className="flex justify-around pt-5 md:justify-center sm:justify-center sm:space-x-5 md:space-x-5">
              <a
                href="https://www.linkedin.com/in/tiagotpk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/5537999431198"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/tiagotpk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="h-1 border-2 border-gray-50 border-dotted mt-5">
            </div>
            <p className="p-2">Tiago Reis @tiagotpk</p>
          </div>
        </div>
      </div>
    </>
  );
}
