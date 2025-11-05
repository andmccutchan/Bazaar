import ListingItem from "@/components/ListingItem";
// import Sidebar from "@/components/Sidebar";

const listings = [
  {
    id: 0,
    title: "Computer",
    price: 100,
    image: "src/assets/564596936_818104227263219_394039838211492480_n.jpg",
    description: "Lenovo ThinkPad for $100 obo",
  },
  {
    id: 1,
    title: "Lego set",
    price: 100,
    image: "src/assets/566327442_1363690555272590_8861172753162926076_n.jpg",
    description: "Gibson SG for $800 obo",
  },
  {
    id: 2,
    title: "Drum kit",
    price: 10000,
    image: "src/assets/567702958_1726860004642626_2897776158573174862_n.jpg",
    description: "Table for $20 obo",
  },
  {
    id: 3,
    title: "Mini-fridge",
    price: 50,
    image: "src/assets/570399114_1155052716092775_7457351465541099198_n.jpg",
    description: "Mini-fridge for $50 obo",
  },
  {
    id: 0,
    title: "Computer",
    price: 100,
    image: "src/assets/571281360_1139990871134167_2785133480146094267_n.jpg",
    description: "Lenovo ThinkPad for $100 obo",
  },
  {
    id: 1,
    title: "Guitar",
    price: 800,
    image: "src/assets/574577580_1507286590308111_1853813906606870685_n.jpg",
    description: "Gibson SG for $800 obo",
  },
  {
    id: 2,
    title: "Table",
    price: 20,
    image: "src/assets/574840994_1175381314569867_68305932179412685_n.jpg",
    description: "Table for $20 obo",
  },
  {
    id: 3,
    title: "Mini-fridge",
    price: 50,
    image: "src/assets/576130477_1419723362847341_726756797647542492_n.jpg",
    description: "Mini-fridge for $50 obo",
  },
  {
    id: 0,
    title: "Computer",
    price: 100,
    image: "src/assets/576580257_1141599381020461_6914050262246019124_n.jpg",
    description: "Lenovo ThinkPad for $100 obo",
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
      <div className="mx-4">
        <h2 className="text-3xl my-2">Picks for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
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
      </div>
    </>
  );
};

export default Bazaar;
