import { CircleUser, Menu } from "lucide-react";
import { Button } from "@components/ui/button";
import Logo from "@assets/svg/logo.svg?react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";

const Nav = () => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "text-white gradients" : "text-black";
  };

  return (
    <header className="fixed w-full backdrop-blur-sm top-0 flex items-center justify-between gap-4 border-none bg-transparent py-4 px-4 md:px-6 z-[99999]">
      <Logo className="h-12 w-12" />
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold text-[1.5rem]">
        Met2ashara
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Welcome</DropdownMenuLabel>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Nav;
