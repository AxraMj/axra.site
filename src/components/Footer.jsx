import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      link: 'https://github.com/AxraMj'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/akshara-manoj/'
    },
    {
      name: 'Email',
      icon: <MdEmail className="w-6 h-6" />,
      link: 'mailto:akjmanoj24@gmail.com'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-6 h-6" />,
      link: 'https://twitter.com/axra_mj'
    }
  ];

  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Axra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 