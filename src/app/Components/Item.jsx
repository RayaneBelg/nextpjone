import React, { PureComponent, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Item({ infos }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: infos.id * 0.05 }}
        whileHover={{scale : 1.05}}
        className="card cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <h1>{infos.nom}</h1>
        <p>{infos.prix} €</p>
        <img src={infos.src} alt={infos.nom} />
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded shadow-lg  overflow-y-auto sm:p-4 h-[70vh] w-[90%] md:w-1/2 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">{infos.nom}</h2>
              <p className='text-justify'>{infos.description}</p>
              <img src={infos.src} alt={infos.nom} className="mb-4 max-h-[30vh]" />
              <p className="text-gray-700">Prix: {infos.prix} €</p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
