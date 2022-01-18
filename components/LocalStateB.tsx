import { ChangeEvent, FormEvent, useState, VFC } from "react";
import { todoVar } from "../cache";
import { useReactiveVar } from "@apollo/client";
import Link from "next/link";

export const LocalStateB: VFC = () => {
  const todos = useReactiveVar(todoVar);
  console.log(todos);
  return (
    <>
      {todos.map((item, index) => (
        <p className="mb-3" key={index}>
          {item.title}
        </p>
      ))}
      <Link href="/local-state-a">
        <a>back</a>
      </Link>
    </>
  );
};
