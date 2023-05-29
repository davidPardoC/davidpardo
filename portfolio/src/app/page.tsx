import { Links } from "@/enums/links";
import GithubIcon from "@/icons/Github";
import InstagramIcon from "@/icons/Instagram";
import LinkedinIcon from "@/icons/Linkedin";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "David Pardo",
};

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-black">David Ernesto Pardo Cuenca</h2>
      <h1 className="pt-1">Software Developer</h1>
      <p className="pt-1">I build quality software products for the web.</p>
      <ul className="flex gap-4 pt-5">
        <li>
          <Link href={Links.Github} target="blank" className="block hover:text-cyan-200" >
            <GithubIcon/>
          </Link>
        </li>
        <li>
          <Link href={Links.Instagram}>
            <InstagramIcon />
          </Link>
        </li>
        <li>
          <Link href={Links.Linkedin} target="blank">
            <LinkedinIcon />
          </Link>
        </li>
      </ul>
    </>
  );
}
