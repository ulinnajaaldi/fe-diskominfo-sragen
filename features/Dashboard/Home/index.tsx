"use client";

import React from "react";
import { useShallow } from "zustand/react/shallow";

import useAuthStore from "@/hook/useAuth";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardHomeFeature: React.FC = () => {
  const [logoutHandler] = useAuthStore(
    useShallow((state) => [state.logoutHandler]),
  );

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <ScrollArea className="3xl:h-[78vh] h-[75vh]">
        <p>DashboardHomeFeature</p>
        <Button onClick={logoutHandler}>Logout</Button>
      </ScrollArea>
    </div>
  );
};

export default DashboardHomeFeature;
