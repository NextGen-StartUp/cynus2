import { motion } from "framer-motion"

export default function CardAnimation({ children }) {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: 100, opacity: 0 }
            }}>
            {children}
        </motion.div>
    )
}




