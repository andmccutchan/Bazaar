import ListingItem from "@/components/ListingItem";
// import Sidebar from "@/components/Sidebar";

const listings = [
  {
    id: 0,
    title: "Computer",
    price: 100,
    image: "https://placehold.co/200x200",
    description: "Lenovo ThinkPad for $100 obo",
  },
  {
    id: 1,
    title: "Guitar",
    price: 800,
    image: "https://placehold.co/400x600",
    description: "Gibson SG for $800 obo",
  },
  {
    id: 2,
    title: "Table",
    price: 20,
    image: "https://placehold.co/200x200",
    description: "Table for $20 obo",
  },
  {
    id: 3,
    title: "Mini-fridge",
    price: 50,
    image: "https://placehold.co/200x200",
    description: "Mini-fridge for $50 obo",
  },
  {
    id: 0,
    title: "Computer",
    price: 100,
    image: "https://placehold.co/200x200",
    description: "Lenovo ThinkPad for $100 obo",
  },
  {
    id: 1,
    title: "Guitar",
    price: 800,
    image: "https://placehold.co/400x600",
    description: "Gibson SG for $800 obo",
  },
  {
    id: 2,
    title: "Table",
    price: 20,
    image: "https://placehold.co/200x200",
    description: "Table for $20 obo",
  },
  {
    id: 3,
    title: "Mini-fridge",
    price: 50,
    image: "https://placehold.co/200x200",
    description: "Mini-fridge for $50 obo",
  },
  {
    id: 0,
    title: "Computer",
    price: 100,
    image: "https://placehold.co/200x200",
    description: "Lenovo ThinkPad for $100 obo",
  },
  {
    id: 1,
    title: "Guitar",
    price: 800,
    image: "https://placehold.co/400x600",
    description: "Gibson SG for $800 obo",
  },
  {
    id: 2,
    title: "Table",
    price: 20,
    image: "https://placehold.co/200x200",
    description: "Table for $20 obo",
  },
  {
    id: 3,
    title: "Mini-fridge",
    price: 50,
    image: "https://placehold.co/200x200",
    description: "Mini-fridge for $50 obo",
  },
];

interface BazaarProps {
  searchTerm?: string;
}

const Bazaar = ({ searchTerm = "" }: BazaarProps) => {
  const filteredListings = listings.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 mx-4">
        {filteredListings.map((item, index) => (
          <ListingItem
            key={`${item.id}-${index}`}
            title={item.title}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Bazaar;
