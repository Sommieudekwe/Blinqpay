import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

interface CardProps {
  description: string;
  content: string;
  name: string;
}

export default function PeopleCard({ description, content, name }: CardProps) {
  return (
    <Card className="max-w-lg px-3">
      <CardHeader className="gap-2">
        <div>
          <h3>{name}</h3>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
