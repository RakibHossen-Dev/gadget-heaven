import { useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const gadget = useLoaderData();
  const { category } = useParams();
  const [gadgetitem, setGadgetitem] = useState([]);
  console.log(gadgetitem);

  useEffect(() => {
    if (category) {
      const filterdBtCategory = [...gadget].filter(
        (gadget) => gadget.category === category
      );
      setGadgetitem(filterdBtCategory);
    } else {
      setGadgetitem(gadget);
    }
  }, [category, gadget]);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {gadgetitem.map((gadgets) => (
        <Card key={gadgets.id} gadgets={gadgets}></Card>
      ))}
    </div>
  );
};

export default GadgetCards;
