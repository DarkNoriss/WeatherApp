import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="shrink-0 py-1">
      <Link
        href="https://github.com/DarkNoriss/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-center space-x-1 hover:brightness-75"
      >
        <Image
          src="/github-mark-white.png"
          alt="GitHub icon"
          height={16}
          width={16}
        />
        <span className="text-lg">DarkNoriss</span>
      </Link>
    </footer>
  );
};

export default Footer;
