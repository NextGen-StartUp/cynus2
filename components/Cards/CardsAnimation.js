import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";

const cards = [
  { id: 1, content: "Card 1" },
  { id: 2, content: "Card 2" },
  { id: 3, content: "Card 3" },
  { id: 4, content: "Card 4" },
];

function App() {
  return (
    <AnimateSharedLayout type="crossfade">
      {cards.map((card, index) => (
        <Card key={card.id} index={index} content={card.content} />
      ))}
    </AnimateSharedLayout>
  );
}

function Card({ content, index }) {
  const controls = useAnimation();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [show, controls]);

  return (
    <motion.div
      layout
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
      onViewportBoxUpdate={() => setShow(true)}
      transition={{ delay: index * 0.2 }}
    >
      {content}
    </motion.div>
  );
}
