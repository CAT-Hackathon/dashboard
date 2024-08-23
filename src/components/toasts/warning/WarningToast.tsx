import { useEffect } from 'react';
import './warningToast.css';

interface WarningToastProps {
  message: string;
  func: () => void;
}

const WarningToast: React.FC<WarningToastProps> = ({ message, func }) => {
  useEffect(() => {
    const overlay = document.querySelector<HTMLDivElement>(".warning__overlay");
    const cancelBtn = document.querySelector<HTMLButtonElement>(".warning__overlay .cancel");

    const handleOverlayClick = () => {
      if (overlay) overlay.style.display = "none";
    };

    const handleCancelClick = () => {
      if (overlay) overlay.style.display = "none";
    };

    if (overlay && cancelBtn) {
      overlay.addEventListener("click", handleOverlayClick);
      cancelBtn.addEventListener("click", handleCancelClick);
    }

    return () => {
      if (overlay && cancelBtn) {
        overlay.removeEventListener("click", handleOverlayClick);
        cancelBtn.removeEventListener("click", handleCancelClick);
      }
    };
  }, []);

  return (
    <div className="warning__overlay">
      <div className="warning__box">
        <h3>{message}</h3>
        <div className="btns">
          <button className="yes" onClick={func}>نعم</button>
          <button className="cancel">الغاء</button>
        </div>
      </div>
    </div>
  );
};

export default WarningToast;
