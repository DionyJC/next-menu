import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function CardRecepi({ meal }) {
  return (
    <div className="mx-auto">
      <Link href={`/recipes/${meal?.idMeal}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="flex flex-wrap py-4">
            <CardHeader className="pb-0 pt-2 px-4 items-center">
              <h1 className="font-bold text-large text-slate-800">
                {meal?.strMeal}
              </h1>
            </CardHeader>
            <CardBody className="py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={meal?.strMealThumb}
                width={270}
                height={180} // Asegúrate de establecer una altura fija para todas las imágenes
              />
            </CardBody>
          </Card>
        </motion.div>
      </Link>
    </div>
  );
}

export default CardRecepi;
