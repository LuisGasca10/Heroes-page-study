import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const HeroStatCard = ({ title, icon }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18.8% of total</p>
      </CardContent>
    </Card>
  );
};
