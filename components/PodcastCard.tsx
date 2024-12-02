import Image from "next/image";
import React from "react";

export default function PodcastCard({
  description,
  title,
  imgURL,
  podcastId,
}: {
  imgURL: string;
  title: string;
  podcastId: number;
  description: string;
}) {
  return (
    <div className="cursor-pointer  ">
      <figure className="flex flex-col gap-2 ">
        <Image
          src={
            "https://images.pexels.com/photos/2247677/pexels-photo-2247677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          width={174}
          height={174}
          className="aspect-square h-fit w-full rounded-lg 2xl:size-[200px]"
        />
      </figure>
      <div className="flex flex-col py-2">
        <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
        <h2 className="text-12 truncate text-white-4 font-normal capitalize">
          {description}
        </h2>
      </div>
    </div>
  );
}
