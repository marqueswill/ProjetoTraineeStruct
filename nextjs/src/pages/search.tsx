import RestaurantCard from "@/components/RestaurantCard";
import { defaultMenu, defaultRestaurant } from "@/types/types";
import { Menu, Restaurant } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  restaurants: Restaurant[];
}> = async (context) => {
  const res = await fetch(`http://localhost:3000/api/restaurant/`, {
    method: "GET",
  });

  const restaurants = await res.json();

  return { props: { restaurants } };
};

export default function SearchPage({
  restaurants,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  // console.log(restaurants)
  return (
    <div>
      {/* {JSON.stringify(restaurants)} */}
      {restaurants ? (
        restaurants.map((restaurant: Restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })
      ) : (
        <h1>Cadê????</h1>
      )}
    </div>
  );
}
