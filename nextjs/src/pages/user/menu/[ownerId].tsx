`use session`;

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  user: any;
}> = async (context) => {
  const ownerId = context.query.ownerId;
  const res = await fetch(`http://localhost:3000/api/user/owner/${ownerId}`, {
    method: "GET",
  });

  let user = {};
  if (res.ok) {
    user = await res.json();
  }

  return { props: { user } };
};

export default function UserMenuPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { data: session } = useSession();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("Faça login para continuar!");
      router.push(`/api/auth/signin`);
    },
  });

  if (status === `loading`) {
    return (
      <div>
        <h1>Faça Login!</h1>
      </div>
    );
  } else {
    if (session && session.user) {
      if (session.user.id !== router.query.ownerId)
        router.push(`/user/profile`);
      else {
        return (
          <div>
            {/* {JSON.stringify(user)} */}
            {session.user.isOwner && (
              <a href={`/restaurant/menu/${user.restaurant.id}`}>Cardápio</a>
            )}
          </div>
        );
      }
    }
  }
}
