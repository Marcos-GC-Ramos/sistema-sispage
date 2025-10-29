"use client";

import styles from "./point-status.module.css";

type PointStatusProps = {
  color?: "neutral" | "info" | "error";
  size?: "md" | "lg" | "xl";
  className?: string; 
};

export default function PointStatus({
  color = "neutral",
  size = "md",
  className = "",
}: PointStatusProps) {
  const colorClass = {
    neutral: styles.pointStatusNeutral,
    info: styles.pointStatusInfo,
    error: styles.pointStatusError,
  }[color];

  const sizeClass = {
    md: styles.pointStatusMd,
    lg: styles.pointStatusLg,
    xl: styles.pointStatusXl,
  }[size];

  return (
    <span className={`${styles.pointStatusRoot} ${styles.pointStatus} ${colorClass} ${sizeClass} ${className}`} />
  );
}
