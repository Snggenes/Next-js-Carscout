import Container from "../container";
import Logo from "./logo";
import Links from "./links";
import Menu from "./menu";
import ProfileMenu from "./profile-menu";

import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="fixed w-full z-20 shadow-sm bg-[#333333] h-12 lg:h-16">
      <Container className="max-w-[1600px] h-full flex flex-row items-center justify-between">
        <Menu user={user}/>
        <Logo height={145} width={145}/>
        <Links />
        <ProfileMenu user={user}/>
      </Container>
    </nav>
  );
}
