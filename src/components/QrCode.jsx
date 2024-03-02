import { useState } from "react";
import "./QrCode.css";
export const QrCode = () => {
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);
  const [qrData, setQrData] = useState("https://www.youtube.com");
  const [size, setSize] = useState("100");

  const generate = async () => {
    setLoad(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}×${size}&data=${qrData}`;
      setImg(url);
    } catch (error) {
      console.log("Somthing went to wrong...", error);
    } finally {
      setLoad(false);
    }
  };
  return (
    <>
      <div className="qrBox">
        <h2>QR CODE GENERATOR</h2>
        {load && <p>Please wait...</p>}
        {img && <img src={img} />}
        <div className="inputSec">
          <label>Data for QR code</label>
          <input
            type="text"
            value={qrData}
            onChange={(e) => setQrData(e).target.value}
          />
        </div>
        <div className="inputSec">
          <label>Image Size(e.g., 100)</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e).target.value}
          />
        </div>
        <div className="buttonSec">
          <button className="primary" onClick={() => generate()}>
            Generate QR Code
          </button>
        </div>
      </div>
    </>
  );
};
