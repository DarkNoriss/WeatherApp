import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="shrink-0 text-center">
      <Link
        href="https://github.com/DarkNoriss/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-blue-400"
      >
        <p>DarkNoriss</p>
      </Link>
    </footer>
  );
};

export default Footer;
