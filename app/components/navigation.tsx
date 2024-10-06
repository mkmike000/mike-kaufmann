import { Icons } from "./icons"; // Now the import should work

export default function Navigation() {
  return (
    <nav>
      <Icons.Home className="w-6 h-6" /> {/* Use the icons like this */}
      <Icons.Search className="w-6 h-6" />
      {/* Add your navigation links here */}
    </nav>
  );
}