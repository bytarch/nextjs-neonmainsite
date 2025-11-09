'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Plus } from 'lucide-react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mobileMenuDialog = mobileMenuDialogRef.current;
    if (!mobileMenuDialog) return;

    const handleDialogClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target === mobileMenuDialog) {
        mobileMenuDialog.close();
        setIsMobileOpen(false);
      }
    };

    mobileMenuDialog.addEventListener('click', handleDialogClick);
    return () => mobileMenuDialog.removeEventListener('click', handleDialogClick);
  }, [isMobileOpen]);

  const toggleMobileMenu = () => {
    if (isMobileOpen) {
      mobileMenuDialogRef.current?.close();
      setIsMobileOpen(false);
    } else {
      mobileMenuDialogRef.current?.showModal();
      setIsMobileOpen(true);
    }
  };

  const closeMobileMenu = () => {
    mobileMenuDialogRef.current?.close();
    setIsMobileOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      <nav ref={navbarRef} className="backdrop-blur-md bg-black/20 border-b border-white/10 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-20">
        <div className="flex items-center space-x-2">
          <img src="/favico.png" alt="Neon Next Generation Logo" className="h-8" />
          <span className="text-white text-lg font-semibold">Neon</span>
        </div>

        <div className="hamburger-menu md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </div>

        <div className="navbar-links md:flex items-center space-x-8 text-sm font-semibold uppercase hidden md:flex">
          <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
          <a href="https://hosting.neonnextgeneration.com/" className="text-gray-300 hover:text-white transition-colors duration-200">Hosting</a>
          <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
        
        </div>

        <div className="navbar-actions flex items-center space-x-2">
          <a href="https://billing.neonnextgeneration.com/login" className="text-gray-300 hover:text-white font-semibold transition-colors duration-200">LOGIN</a>
          <a href="https://billing.neonnextgeneration.com/login" className="text-gray-300 hover:text-white rounded-full p-1 border border-gray-600 hover:border-white transition-colors duration-200">
            <Plus className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <dialog ref={mobileMenuDialogRef} id="mobile-menu-dialog-nav" className="bg-[#1a1a1a] border-none rounded-xl p-8 w-11/12 max-w-md shadow-2xl text-white z-50 opacity-0 scale-90 transition-all duration-300 open:opacity-100 open:scale-100">
        <div className="flex justify-end mb-4">
          <button onClick={closeMobileMenu} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="menu-links text-sm font-semibold uppercase flex flex-col gap-4 text-center">
          <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-md hover:bg-[#2a2a2a]" onClick={handleLinkClick}>Home</a>
          <a href="https://hosting.neonnextgeneration.com/" className="text-gray-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-md hover:bg-[#2a2a2a]" onClick={handleLinkClick}>Hosting</a>
          <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-md hover:bg-[#2a2a2a]" onClick={handleLinkClick}>Pricing</a>
             </div>
      </dialog>
    </>
  );
};

export default Navbar;