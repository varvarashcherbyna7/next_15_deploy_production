
import { formatDateTime } from "@/lib/utils";
import { Author, Startup } from "@/src/sanity/types";
import { EyeIcon } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { Button } from "./ui/button";

export type SturtupTypeCard = Omit<Startup, 'author'> & { author?: Author }

export const SturtupCard = ({ post }: { post: SturtupTypeCard }) => {

  const { _createdAt, views, _id, image, title, description, category, author } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDateTime(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">
              {author?.name}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image src={'https://placehold.co/48x48'} alt="placeholder" width={48} height={48} className="rounded-full" />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">
          {description}
        </p>
        <div className="startup-card_img">
          <img src={image} alt="startup" className="h-[150px] object-cover" />
        </div>
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium text-primary">
            {category}
          </p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </Button>
      </div>
    </li>
  )
};
