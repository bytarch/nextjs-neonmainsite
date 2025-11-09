import { FaDiscord } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';
import { footerData } from '../lib/footer-constants';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-black/20 border-t border-white/10 text-white py-6">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
          {/* Neon Logo/Name and Social Icons */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <img src={footerData.logo.src} alt={footerData.logo.alt} className="h-8" />
                <span className="text-white text-lg font-semibold">{footerData.logo.name}</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-3 md:mt-0">
              {footerData.socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={link.ariaLabel}>
                  {link.icon === 'github' && <AiOutlineGithub className="w-6 h-6" />}
                  {link.icon === 'discord' && <FaDiscord className="w-6 h-6" />}
                  {link.icon === 'tiktok' && <SiTiktok className="w-6 h-6" />}
                  {link.icon === 'instagram' && <AiOutlineInstagram className="w-6 h-6" />}
                </a>
              ))}
            </div>
          </div>

          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}><a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">{link.text}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;