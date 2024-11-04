import type { MetaFunction } from "@remix-run/node";
import { LandingPage } from "../components/landingPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio by Yokomachi" },
    { name: "description", content: "Welcome to Yokomachi Naoki's portfolio" },
  ];
};

export default function Index() {
  return (
    <>
      <LandingPage />
    </>
  );
}
