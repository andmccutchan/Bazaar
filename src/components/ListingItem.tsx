import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
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
        <Card>
          <CardContent>
            <div className="h-[200px] w-full overflow-hidden">
              <img
                className="rounded-sm w-full h-full object-cover"
                src={image}
                alt={title}
              />
            </div>
          </CardContent>
          <CardHeader>
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
