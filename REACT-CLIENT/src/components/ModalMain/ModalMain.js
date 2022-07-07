import React, { useState } from "react";
import styles from "./ModalMain.module.css";

import Modal from "../Modal/Modal";

const ModalMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ModalMain;
