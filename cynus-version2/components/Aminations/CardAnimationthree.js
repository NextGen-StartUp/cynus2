import { motion } from "framer-motion"

export default function CardAnimationthree({ children }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: 100, opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    )
}
