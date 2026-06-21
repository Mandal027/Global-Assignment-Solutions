import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Global Assignment Solutions" },
    { name: "description", content: "Welcome to Globbal Assignment Solutions!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
