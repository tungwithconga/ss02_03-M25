import React from 'react';
import styles from './components/Popup.module.sass';

interface PopupProps {
  message: string;
  onCancel: () => void;
  onDelete: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onCancel, onDelete }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <span>!</span>
          </div>
        </div>
        <h2>Delete blog post</h2>
        <p>{message}</p>
        <div className={styles.actions}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.deleteButton} onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
