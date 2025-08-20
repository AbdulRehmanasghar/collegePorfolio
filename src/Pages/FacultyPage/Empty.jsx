import { motion } from "framer-motion";
import { PartyPopper, Search, Ghost, Wand2 } from "lucide-react";
import { useState } from "react";

const Empty = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setShowSurprise(true);
      setTimeout(() => setShowSurprise(false), 3000);
    }, 1000);
  };

  return (
    <motion.div
      className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <motion.div
        className="relative mx-auto w-48 h-48 mb-8"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          },
          rotate: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          },
        }}
      >
        <Ghost className="w-full h-full text-gray-300" />
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          👻
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-3xl font-bold mb-3 text-white">
          Ghosted by Faculty! 👻
        </h3>
        <p className="text-lg text-soft-white mb-6">
          Our professors pulled a disappearing act!
          <br />
          Maybe they're at a{" "}
          <span className="text-accent">haunted lecture hall</span>?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className={`px-6 py-3 rounded-full font-bold text-white flex items-center gap-2 mx-auto mb-4 ${
            isClicked ? "bg-purple-500" : "bg-accent hover:bg-accent-dark"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          {isClicked ? (
            <>
              <Wand2 className="animate-spin" />
              Summoning...
            </>
          ) : (
            <>
              <Search />
              Try Magic Search Spell
            </>
          )}
        </motion.button>

        {showSurprise && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-sm text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <PartyPopper className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Surprise! 🎉</h3>
              <p className="mb-4">Just kidding, they're still missing...</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => {
                  setShowSurprise(false);
                  setIsClicked(false);
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="text-sm text-gray-400 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p>Pro tip: Try sacrificing a textbook to the education gods</p>
      </motion.div>
    </motion.div>
  );
};

export default Empty;
