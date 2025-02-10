import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  disabled: boolean;
}

export default function ProjectCard({
  title,
  description,
  link,
  disabled,
}: ProjectCardProps) {
  return (
    <Card className="bg-background border-solid text-foreground rounded-none md:h-full md:w-full flex flex-col justify-between">



      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="justify-center">
          {disabled ? (
            <Button variant="outline" className="rounded-none" disabled>
              github.
            </Button>
          ) : (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-none">
                github.
              </Button>
            </a>
          )}
      </CardFooter>

    </Card>
  );

}
