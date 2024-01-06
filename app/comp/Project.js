import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Project() {
  return (
    <div className="w-[85%] mx-auto flex flex-col gap-y-4 my-20">
      <div className="text-center my-10">
        <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          Projects
        </span>
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:justify-between">
        <div className="max-w-[30rem]">
          <Card>
            <CardHeader>
              <CardTitle>SweatLab</CardTitle>
              <CardDescription>Best gym buddy on a website</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt="sweatlab"
                height={400}
                width={400}
                src="/sweatlab.png"
              />
              <p className="my-4">
                Variety of courses to choose from, excercises to attempt and
                user defined database.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">ReactJS</Badge>
                <Badge variant="secondary">Typescript</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">Framer motion</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <a href="https://gym-one.vercel.app/" target="_blank">
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-[30rem]">
          <Card>
            <CardHeader>
              <CardTitle>Tasty table</CardTitle>
              <CardDescription>A search based recipe website</CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="sweatlab" height={400} width={400} src="/tasty.png" />
              <p className="my-4">
                A search based recipe website where you can bookmark the recipes
                you want, delete them.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">ReactJS</Badge>
                <Badge variant="secondary">Redux</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">Framer motion</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <a href="https://tasty-table.vercel.app/" target="_blank">
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-[30rem]">
          <Card>
            <CardHeader>
              <CardTitle>Website design</CardTitle>
              <CardDescription>Design</CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="sweatlab" height={400} width={400} src="/pay.png" />
              <p className="my-4">
                PayE - Payroll Management Website design
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Framer</Badge>
                <Badge variant="secondary">Figma</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <a href="https://effortless-payroll-management.framer.ai/" target="_blank">
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-[30rem]">
          <Card>
            <CardHeader>
              <CardTitle>PayE</CardTitle>
              <CardDescription>
                Effortless Payroll Management and Employee Tracking Close the
                dialog
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="sweatlab" height={400} width={400} src="/paye.png" />
              <p className="my-4">
                A website where you can manage employees, pay their salary, give
                feedback, post job vacancies via forms and more more thing.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">NextJS</Badge>
                <Badge variant="secondary">Redux</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">ExpressJS</Badge>
                <Badge variant="secondary">JWT auth</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <a href="https://paye-rose.vercel.app/" target="_blank">
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
