import React from "react";
import dynamic from "next/dynamic";
const BaseAskCookbook = dynamic(import("@cookbookdev/docsbot/react"), { ssr: false });

/** It's going to be exposed in HTTP requests anyway so it's fine to just hardcode it here */
const COOKBOOK_PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmI2NTAxNmExMTM5ZTYzYzhhM2ZkYzEiLCJpYXQiOjE3MjMyMjQwODYsImV4cCI6MjAzODgwMDA4Nn0.MAx1zYslk6qcJmwgcKcVOKnztIZxsKxcBCMPgYiEqiU";

export const AskCookbook = () => {
  return <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />;
};
