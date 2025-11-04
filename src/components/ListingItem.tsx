import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

const ListingItem = ({
  title,
  image,
  price,
  description,
}: {
  title: string;
  image: string;
  price: number;
  description: string;
}) => {
  return (
    <>
      <Link className="hover:underline" to="/item">
        <Card className="rounded-sm pt-0">
          <CardContent className="px-0">
            <img
              className="w-full h-70 object-cover rounded-t-sm"
              src={image}
              alt={title}
            />
          </CardContent>
          <CardHeader className="px-2">
            <CardTitle>
              {title} <span className="text-slate-600">${price}</span>
            </CardTitle>
            <CardDescription className="truncate">
              {description}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </>
  );
};

export default ListingItem;
