"use client";

import React, { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}
const ErrorSimulater = ({
  message = "Error Occured",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) throw new Error(message);
  return <button onClick={() => setError(!error)}>Simulate Error</button>;
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <ErrorSimulater message="Simulated Error in root layout" />
      {children}
    </div>
  );
};
