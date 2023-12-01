import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Avatar,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar isBordered className="bg-slate-900">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="http://localhost:3000">
          <p className="md:text-2xl text-white sm:block font-bold text-inherit">
            Next-Menú
          </p>
          </Link>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="md"
          src="/foto.jpg"
        />

        <NavbarItem>
          <Link href="http://localhost:3000/about" className=" text-white">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
