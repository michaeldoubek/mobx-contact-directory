import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Person } from "../../store";

type PersonCardProps = Person & {
  onEdit: () => void;
};

function PersonCard(props: PersonCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {props.firstName} {props.lastName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Param title="Email" value={props.email} />
        <Param title="Phone" value={props.phone} />
        <Param title="Company" value={props.company ?? "-"} />
      </CardContent>
      <CardFooter>
        <Button onClick={props.onEdit}>Edit</Button>
      </CardFooter>
    </Card>
  );
}

type ParamProps = {
  title: string;
  value: string;
};

function Param(props: ParamProps) {
  return (
    <>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">{props.title}</h4>
        <span className="text-sm text-muted-foreground">{props.value}</span>
      </div>
      <Separator className="my-4" />
    </>
  );
}

export default PersonCard;
