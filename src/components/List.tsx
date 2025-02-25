"use client"
import React from "react";
interface ResponseInterface {
  data?: any;
  message?: string;
  status: string;
}
const List = ({ response }: { response: ResponseInterface }) => {
  const { status, data, message } = response;
  if (status === "failure") {
    return <p>{message}</p>;
  }
  return (
    <ul>
      {data.map((item: { title: string }, ind: number) => {
        return <li key={ind}>{item.title}</li>;
      })}
    </ul>
  );
};

export default List;
