import React from "react";
import AppBarContainer from "@/components/App/AppBar/AppBarContainer";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import ActionCenter from "@/components/App/AppBar/ActionCenter";
import ActionButton from "@/components/App/AppBar/ActionButton";
import IconUser from "@/components/Icons/User";

export default function AppBar() {
  return (
    <AppBarContainer extraClasses={"appbar"}>
      <div className={"flex"}>
        <Logo text={"Clients App"} />
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
