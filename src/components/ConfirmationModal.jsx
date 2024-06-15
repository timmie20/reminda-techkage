import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const ConfirmationModal = ({ confirmed, setConfirmed,handleSubmit }) => {
  return (
    <AnimatePresence>
      {confirmed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setConfirmed(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-green_light to-green_dark p-6 text-white shadow-xl"
          >
            <FiAlertCircle className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
            <div className="relative z-10">
              <h3 className="mb-2 text-center text-3xl font-bold">
                One more thing!
              </h3>
              <p className="mb-6 text-center">
                This action cannot be undone or edited are you sure you want to
                proceed
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConfirmed(false)}
                  className="w-full rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Nah, go back
                </button>
                <button
                  onClick={handleSubmit}
                  className="w-full rounded bg-white py-2 font-semibold text-green_light transition-opacity hover:opacity-90"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;