import React from "react";

export default function Podcast({ params }: { params: { podcastId: string } }) {
  return (
    <div className="text-white-1"> Podcast details for {params.podcastId} </div>
  );
}
