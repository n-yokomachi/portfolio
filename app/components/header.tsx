import { Link } from '@remix-run/react';

export function Header() {
  const navItems = ['Profile', 'Skill', 'Project', 'Link', 'Contact'];

  return (
    <div>
      <header className="fixed top-0 w-full shadow bg-sky-950 text-white py-3 px-4">
        <nav className="flex justify-center">
          <ul className="flex space-x-4 flex-grow">
            {navItems.map((item) => (
                <li key={item} className="flex-grow text-center border-r border-[#fffbeb] last:border-0">
                <Link
                  to={`#${item.toLowerCase()}`}
                  className="hover:text-sky-200 transition-colors text-[#fffbeb] duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

