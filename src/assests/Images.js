// Import scan animation GIFs
import scanGif1 from './scan-gif-1.gif';
import scanGif2 from './scan-gif-2.gif';
import scanGif3 from './scan-gif-3.gif';
import scanGif4 from './scan-gif-4.gif';
import scanGif5 from './scan-gif-5.gif';

// Import feature icons
import aiScan from './ai-scan.png';
import seamlessIntegrations from './seamless_integrations.png';
import vulnerabilityDetectors from './vulnerability_detectors.png';
import auditReport from './audit_report.png';

// Export as named exports
export {
  scanGif1,
  scanGif2,
  scanGif3,
  scanGif4,
  scanGif5,
  aiScan,
  seamlessIntegrations,
  vulnerabilityDetectors,
  auditReport
};

// Export as a grouped object
export const Images = {
  scanGifs: [scanGif1, scanGif2, scanGif3, scanGif4, scanGif5],
  icons: {
    aiScan,
    seamlessIntegrations,
    vulnerabilityDetectors,
    auditReport
  }
};

export default Images;