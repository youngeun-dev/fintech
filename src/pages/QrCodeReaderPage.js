import React ,{useState} from 'react'
import HeaderWhite from '../components/HeaderWhite'
import QrReader from 'react-web-qr-reader';


const QrCodeReaderPage = () => {
    const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      //setResult(result);
      console.log(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div>
        <HeaderWhite title="QR 코드 리더기"></HeaderWhite>
        <QrReader
            delay={delay}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
        />
        <p>{result}</p>
    </div>
  )
}

export default QrCodeReaderPage