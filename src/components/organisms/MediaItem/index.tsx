"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

type Props = {
  alt: string;
  mediaItemId: string;
  className?: string;
};

export const MediaItem: React.FC<Props> = ({ alt, mediaItemId, className }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["mediaItem", mediaItemId],
    queryFn: async () => {
      const response = await axios.get<MediaItem>(
        `/api/mediaItems/${mediaItemId}`
      );
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {(error as Error).message}</p>;

  if (!data) return;

  return (
    <Image
      alt={alt}
      className={className}
      src={data.baseUrl}
      width={Number(data?.mediaMetadata.width)}
      height={Number(data?.mediaMetadata.height)}
    />
  );
};
