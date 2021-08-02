import Link from "next/link";
export default function Person({ person, i }) {
  return (
    <div key={i}>
      <Link href="/users/[id]" as={`/users/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </div>
  );
}
