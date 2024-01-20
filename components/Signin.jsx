import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";

const SignIn = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <Button onClick={() => signOut()} variant="contained" color="error" className="text-black font-bold bg-red-400">
        Sign Out
      </Button>
    );
  }
  return (
    <Button
      onClick={() => signIn()}
      variant="contained"
      color="success"
      className="text-black font-bold bg-green-400"
    >
      Sign In
    </Button>
  );
};

export default SignIn;
