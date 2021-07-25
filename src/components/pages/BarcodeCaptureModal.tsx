import { Result } from '@zxing/library';
import Button from 'components/atoms/Button';
import Modal from 'components/modules/Modal';
import WebcamCaptrue from 'components/modules/WebcamCapture';
import React, { useState, useCallback } from 'react';
import Barcode from 'sounds/barcode.mp3';

type Props = { onHideClick(): void };

const BarcodeCaptureModal: React.FC<Props> = ({ onHideClick }) => {
  const [barcode, setBarcode] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [stopStream, toggleStopStream] = useState(false);

  const handleImageUpdate = useCallback((result: Result, nextImageSrc: string) => {
    const audio = new Audio(Barcode);
    toggleStopStream(true);
    setBarcode(result.getText());
    setImageSrc(nextImageSrc);
    audio.play();
  }, []);

  const handleReCaptureClick = useCallback(() => {
    setImageSrc('');
    toggleStopStream(false);
  }, []);

  const handleRegisterProductClick = useCallback(() => {
    /**
     * @todo API 연동
     */
  }, []);

  return (
    <Modal
      title="바코드 인식"
      onHideClick={onHideClick}
      buttonGroup={
        <>
          <Button onClick={onHideClick}>닫기</Button>
          {imageSrc && (
            <>
              <Button buttonType="primary" onClick={handleReCaptureClick}>
                재촬영
              </Button>
              <Button buttonType="primary" onClick={handleRegisterProductClick}>
                상품등록
              </Button>
            </>
          )}
        </>
      }
    >
      {imageSrc ? (
        <img src={imageSrc} width={660} alt="barcode-captured-img" />
      ) : (
        <WebcamCaptrue onImageUpdate={handleImageUpdate} stopStream={stopStream} styles={{ width: 660 }} />
      )}
    </Modal>
  );
};

export default BarcodeCaptureModal;
