"use client";
import { motion } from "framer-motion";
import Card from "./Card";

const SlidingForestillinger = ({data}) => {
    return ( 
        <motion.ul className="flex gap-3 mt-4 scroll-x-auto overflow-x-scroll">
                      {data.map((item) => (
                        <Card key={item.id} item={item} />
                      ))}
        </motion.ul>
     );
}
 
export default SlidingForestillinger;