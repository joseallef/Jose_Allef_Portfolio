import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-12 bg-gray-900 text-lg text-white flex justify-center items-center">
      <a href="https://github.com/joseallef" target="_blank" rel="noopener noreferrer" className="mx-2">
        <img src="/image/githubIcon.svg" alt="Github" width="30" />
      </a>
      <a href="https://www.linkedin.com/in/jose-allef-17b508170/" target="_blank" rel="noopener noreferrer" className="mx-2">
        <img src="/image/linkedinIcon.svg" alt="Linkedin" width="30" />
      </a>
    </footer>
  );
}
