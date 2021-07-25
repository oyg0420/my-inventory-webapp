import React, { useEffect, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import styled from 'styled-components';
import IconLogo from 'images/icon-logo.svg';

const WebcamContainer = styled.div`
  background-image: url(${IconLogo});
  background-position: center;
  background-size: 10px 10px;
`;

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

type Props = {
  stopStream?: boolean;
  styles?: { width?: number; height?: number };
  onImageUpdate(result: Result, imageSrc: string): void;
  onImageError?(err: any): void;
};

const WebcamCaptrue: React.FC<Props> = ({ stopStream, styles, onImageUpdate, onImageError }) => {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(async () => {
    const codeReader = new BrowserMultiFormatReader();
    const imageSrc = webcamRef.current?.getScreenshot();

    if (imageSrc) {
      try {
        const result = await codeReader.decodeFromImage(undefined, imageSrc);
        onImageUpdate(result, imageSrc);
      } catch (err) {
        onImageError?.(err);
      }
    }
  }, [onImageUpdate, onImageError]);

  useEffect(() => {
    const interval = setInterval(capture, 100);
    return () => {
      clearInterval(interval);
    };
  }, [capture]);

  useEffect(() => {
    if (stopStream) {
      let stream = webcamRef.current?.stream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => {
          track.stop();
        });
        stream = null;
      }
    }
  }, [stopStream]);

  return (
    <Webcam
      width={styles?.width}
      height={styles?.height}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      audio={false}
      videoConstraints={videoConstraints}
    />
  );
};

export default WebcamCaptrue;
