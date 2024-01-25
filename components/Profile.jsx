import React, { use } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session } = useSession();
  if (session && session.user && session.user.image) {
    return (
      <div>
        <Image
          src={session.user.image ?? ""}
          alt={session.user.id ?? ""}
          height={30}
          width={30}
          className="rounded-full"
        />
      </div>
    );
  }
  if (session && session.user) {
    return (
      <div className="rounded-full">
        <Image
          src='/Profile.png'
          alt= 'Profile'
          height={30}
          width={30}
          className="rounded-full"
        />
        {/* <PersonOutlinedIcon /> */}
      </div>
    );
  }
  return (
    <div className="rounded-full">
      <Image
      src='/Profile.png'
      alt= 'Profile'
      height={30}
      width={30}
      className="rounded-full"
    />
      {/* <PersonOutlinedIcon /> */}
    </div>
  );
};

export default Profile;
