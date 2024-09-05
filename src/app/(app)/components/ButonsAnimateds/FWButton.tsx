import Link from "next/link";
import styles from "../../module.css/app.module.css";

interface FWButtonProps {
  contentWidth: string;
  contentHeight: string;
  textContent: string;
}

export default function FWButton({ contentWidth, contentHeight, textContent }: FWButtonProps) {
  return (
    <>
      <Link className={`${styles.fwButtonContainer} ${contentWidth} `} href="/fw-collection"
      style={{height: contentHeight}}
      >
        <div
          className={`${styles.fwButtonContainerDiv} ${styles.fwButtonContainerDiv1}`}
        >
          <span className={`flex items-center justify-center `} style={{height: contentHeight}}>
            <p className={`${styles.fwButtonContainerP} uppercase`}>{textContent}</p>
          </span>
        </div>
        <div
          className={`${styles.fwButtonContainerDiv} ${styles.fwButtonContainerDiv2}`}
        >
          <span className={`flex items-center justify-center `} style={{height: contentHeight}}>
            <p className={`${styles.fwButtonContainerP} uppercase`}>{textContent}</p>
          </span>
        </div>
      </Link>
    </>
  );
}
