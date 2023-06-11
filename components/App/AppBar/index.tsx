import React from "react";
import AppBarContainer from "@/components/App/AppBar/AppBarContainer";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import ActionCenter from "@/components/App/AppBar/ActionCenter";
import ActionButton from "@/components/App/AppBar/ActionButton";
import IconUser from "@/components/Icons/User";
import Link from "next/link";

export default function AppBar() {
  return (
    <AppBarContainer extraClasses={"appbar"}>
      <div className={"flex"}>
        <Link href={"/"}>
          <Logo text={"Clients App"} />
        </Link>
        <Navigation />
      </div>
      <ActionCenter>
        <ActionButton label={"Login"} hasIcon={true} iconPosition={"right"}>
          <IconUser />
        </ActionButton>
      </ActionCenter>
    </AppBarContainer>
  );
}
