import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div>User {id}</div>;
};

export default page;
