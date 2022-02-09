import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

interface footerProps {
  author: string;
  website: string;
}

const Footer = (props: footerProps) => {
  const { author, website } = props;
  return (
    <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
      <footer className='absolute bottom-2 text-gray-700'>
        {`© ${new Date().getFullYear()} By `}
        <UnderlineLink href={website}>{author}</UnderlineLink>
      </footer>
    </div>
  );
};

export default Footer;
