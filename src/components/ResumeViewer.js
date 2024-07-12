import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button, Space, Result } from 'antd';
import { PlusOutlined, MinusOutlined, DownloadOutlined } from '@ant-design/icons';

// Set the workerSrc property for PDF.js.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1); // Default scale value based on container width
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  useEffect(() => {
    // Adjust the scale based on container width
    const handleResize = () => {
      const containerWidth = document.querySelector('.pdf-container').offsetWidth;
      setScale(containerWidth / 612); // 612 is the default PDF width in points
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const zoomIn = () => setScale(scale + 0.25);
  const zoomOut = () => setScale(scale - 0.25 >= 0.5 ? scale - 0.25 : 0.5); // Minimum scale value

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
  };

  if (downloadSuccess) {
    return (
      <Result
        status="success"
        title="Successfully Downloaded the Resume!"
        subTitle="You can now access the downloaded file from your device."
        extra={[
          <Button type="primary" key="view" onClick={() => setDownloadSuccess(false)}>
            View Resume
          </Button>,
          <Button key="home">Go Home</Button>,
        ]}
      />
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <nav style={{ marginBottom: '16px' }}>
        <Button type="primary" onClick={zoomIn} icon={<PlusOutlined />} /> <Space />
        <Button type="primary" onClick={zoomOut} icon={<MinusOutlined />} /> <Space />
        <Button type="primary" onClick={handleDownload} icon={<DownloadOutlined />}>
          Download
        </Button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </nav>

      <div className="pdf-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
};

export default ResumeViewer;
