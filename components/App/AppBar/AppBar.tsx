import React from "react";
import Link from "next/link";
import { ActionButton, ActionCenter } from "@/components/App/Actions";
import { AppBarContainer } from "@/components/App/AppBar";
import { IconUser } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";

export function AppBar() {
  return (
    <AppBarContainer extraClasses="appbar">
      <div className="flex">
        <Link href="/">
          <Logo text="Clients App" />
        </Link>
        <Navigation />
      </div>
      <ActionCenter>
        <ActionButton label="Login" hasIcon={true} iconPosition="right">
          <IconUser />
        </ActionButton>
      </ActionCenter>
    </AppBarContainer>
  );
}
