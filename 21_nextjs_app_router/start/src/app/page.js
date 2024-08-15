import Link from "next/link";
import { navList } from "../data/nav";

export default function Home() {
  return (
    <ul className="nav-list">
      {navList.map((item) => {
        return (
          <li key={item}>
            <Link href={`/${item}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
