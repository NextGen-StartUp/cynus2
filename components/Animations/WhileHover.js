import { motion } from "framer-motion"

function WhileHover({ children }) {
    return (
        <motion.div
            className='box'
            whileHover={{
                cursor: 'pointer',
                scale: 1.15,
                backgroundColor: 'rgb(0, 0, 0)',
                transition: { duration: 0.2 },
            }}
        >
            {children}
        </motion.div>
    )
}

export default WhileHover