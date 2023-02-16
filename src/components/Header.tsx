import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="flex flex-row content-center justify-between w-full">
      <span className=" text-2xl">to do day</span>
      <ThemeToggle />
    </header>
  );
}
