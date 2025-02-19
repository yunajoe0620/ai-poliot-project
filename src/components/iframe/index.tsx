import { RefObject } from "react";
import useOnClickOutside from "../../hooks/use-onclick-outside";

interface IframProps {
  url: string | null;
  modalRef: RefObject<HTMLIFrameElement> | null;
  handleModalClose: () => void;
}

function Iframe({ url, modalRef, handleModalClose }: IframProps) {
  useOnClickOutside(modalRef, handleModalClose, "click");

  if (!url) return;
  if (!modalRef) return;

  //   useEffect(() => {}, []);

  return (
    <iframe
      onClick={handleModalClose}
      ref={modalRef}
      src={url} // 생성된 PDF URL을 iframe에 설정
      width="100%"
      height="800px"
      title="PDF Viewer"
    />
  );
}

export default Iframe;
