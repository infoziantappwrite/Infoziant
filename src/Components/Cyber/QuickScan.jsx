import "../css/QuickScan.css"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdClose } from "react-icons/io";

const blockchains = [
    { name: 'Arbitrum', icon: './arbitrum.svg' },
    { name: 'Astar', icon: './astar.svg' },
    { name: 'Aurora', icon: './aurora.svg' },
    { name: 'Avalanche', icon: './avalanche.svg' },
    { name: 'Base', icon: './base.svg' },
    { name: 'Blackfort', icon: './blackfort.svg' },
    { name: 'BOBA', icon: './boba.svg' },
    { name: 'Binance', icon: './binance.svg' },
    { name: 'Buildbear', icon: './buildbear.svg' },
    { name: 'Celo', icon: './celo.svg' },
    { name: 'Chilix', icon: './chiliz.svg' },
    { name: 'Connext', icon: './connext.svg' },
    { name: 'Creditcoin', icon: './creditcoin.svg' },
    { name: 'Cronos', icon: './cronos.svg' },
    { name: 'Ethereum Classic', icon: './etc.svg' },
    { name: 'Ethereum', icon: './ethereum.svg' },
];

export default function QuickScan() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedBlockchain, setSelectedBlockchain] = useState('Select Blockchain');

    // Prevent scrolling on the body when the popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSelect = (name) => {
        setSelectedBlockchain(name);
        setIsOpen(false);
    };
    return (
        <motion.section
      className="quickscan-section"
      initial={{ opacity: 0, y: 50 }} // Start hidden and move upwards
      animate={{ opacity: 1, y: 0 }} // Animate into view
      whileInView={{ opacity: 1, y: 0 }} // Animate when it enters the viewport
      transition={{ duration: 0.8 }} // Smooth animation
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Security <span className="highlight">QuickScan</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience an accessible, user-friendly threat scanner that presents results in simple terms.
        Begin a smart contract scan by choosing from a wide selection of supported protocols and receive
        a clear, concise analysis report in a matter of seconds.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="select-box"
          onClick={() => setIsOpen(true)}
          whileTap={{ scale: 0.95 }}
        >
          {selectedBlockchain}
        </motion.div>

        <motion.input
          className="scan-address-inp"
          type="text"
          placeholder="Type or Paste your contract address here"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        /><br/>

        <motion.button
          type="submit"
          className="gs-btn-scan"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          Start Scan
        </motion.button>
      </motion.form>

      {isOpen && (
        <>
          <div className="backdrop" onClick={() => setIsOpen(false)} />
          <motion.div
            className="popup-scan"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <button className="close-button-scan" onClick={() => setIsOpen(false)}>
              <IoMdClose size={20} />
            </button>
            <ul className="ul-scan">
              {blockchains.map((blockchain) => (
                <motion.li
                  className="li-scan"
                  key={blockchain.name}
                  onClick={() => handleSelect(blockchain.name)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={blockchain.icon}
                    alt={blockchain.name}
                    className="icon-scan"
                  />
                  {blockchain.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </motion.section>
    )
}