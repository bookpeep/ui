import React from "react";
import { SvgIcon } from "@mui/material";
import { SvgIconPropsWithBold } from "./types";

const Thick = () => (
  <>
    <path d="M11.8993 8.72305C12.0161 9.01689 11.936 9.35241 11.6991 9.56186C11.0244 10.1584 10.6009 11.0281 10.6009 11.9976C10.6009 13.7925 12.0559 15.2476 13.8509 15.2476C14.252 15.2476 14.6346 15.1753 14.9873 15.0436C15.2838 14.9329 15.6179 15.0203 15.8223 15.2619C16.0267 15.5036 16.0573 15.8475 15.899 16.1215C14.9926 17.6897 13.2957 18.7476 11.3509 18.7476C8.45136 18.7476 6.10085 16.3971 6.10085 13.4976C6.10085 10.6559 8.35827 8.34184 11.178 8.25039C11.494 8.24015 11.7825 8.4292 11.8993 8.72305ZM9.42032 10.282C8.3302 10.9379 7.60085 12.1327 7.60085 13.4976C7.60085 15.5687 9.27979 17.2476 11.3509 17.2476C12.0564 17.2476 12.7167 17.0529 13.2806 16.7137C10.9261 16.432 9.10085 14.428 9.10085 11.9976C9.10085 11.3927 9.21409 10.8141 9.42032 10.282Z" />
    <path d="M11.3509 6.75C8.08479 6.75 5.35899 9.07041 4.73512 12.153C4.65296 12.559 4.25723 12.8215 3.85125 12.7393C3.44527 12.6572 3.18276 12.2615 3.26493 11.8555C4.02758 8.08713 7.35706 5.25 11.3509 5.25C11.7651 5.25 12.1009 5.58579 12.1009 6C12.1009 6.41421 11.7651 6.75 11.3509 6.75Z" />
    <path d="M17.3509 5.5C17.9785 5.5 18.5398 5.89079 18.7576 6.47945L19.1935 7.65736L20.3714 8.09322C20.9601 8.31104 21.3509 8.87234 21.3509 9.5C21.3509 10.1277 20.9601 10.689 20.3714 10.9068L19.1935 11.3426L18.7576 12.5206C18.5398 13.1092 17.9785 13.5 17.3509 13.5C16.7232 13.5 16.1619 13.1092 15.9441 12.5206L15.5082 11.3426L14.3303 10.9068C13.7416 10.689 13.3509 10.1277 13.3509 9.5C13.3509 8.87234 13.7416 8.31104 14.3303 8.09322L15.5082 7.65736L15.9441 6.47945C16.1619 5.89079 16.7232 5.5 17.3509 5.5ZM14.8509 9.5L16.6756 10.1752L17.3509 12L18.0261 10.1752L19.8509 9.5L18.0261 8.82477L17.3509 7L16.6756 8.82477L14.8509 9.5Z" />
  </>
);

const Thin = () => (
  <>
    <path d="M11.6669 8.81537C11.7448 9.01126 11.6914 9.23494 11.5335 9.37457C10.8074 10.0166 10.3508 10.9535 10.3508 11.9976C10.3508 13.9306 11.9178 15.4976 13.8508 15.4976C14.2823 15.4976 14.6944 15.4198 15.0747 15.2778C15.2724 15.204 15.4951 15.2622 15.6314 15.4233C15.7676 15.5845 15.7881 15.8138 15.6825 15.9964C14.8189 17.4905 13.2028 18.4976 11.3508 18.4976C8.58938 18.4976 6.35081 16.259 6.35081 13.4976C6.35081 10.7913 8.50073 8.58735 11.1861 8.50026C11.3967 8.49343 11.5891 8.61947 11.6669 8.81537ZM9.95222 9.74887C8.43288 10.316 7.35081 11.7805 7.35081 13.4976C7.35081 15.7067 9.14167 17.4976 11.3508 17.4976C12.3663 17.4976 13.2937 17.1193 13.9995 16.4952C13.9501 16.4968 13.9005 16.4976 13.8508 16.4976C11.3655 16.4976 9.35081 14.4829 9.35081 11.9976C9.35081 11.1785 9.56987 10.4104 9.95222 9.74887Z" />
    <path d="M11.3508 6.5C7.96345 6.5 5.13704 8.90653 4.49004 12.1034C4.43526 12.3741 4.17145 12.5491 3.90079 12.4943C3.63014 12.4395 3.45513 12.1757 3.50991 11.9051C4.24944 8.25101 7.4783 5.5 11.3508 5.5C11.627 5.5 11.8508 5.72386 11.8508 6C11.8508 6.27614 11.627 6.5 11.3508 6.5Z" />
    <path d="M17.3508 6C17.7692 6 18.1434 6.26053 18.2887 6.65296L18.8043 8.0465L20.1978 8.56215C20.5903 8.70736 20.8508 9.08156 20.8508 9.5C20.8508 9.91844 20.5903 10.2926 20.1978 10.4379L18.8043 10.9535L18.2887 12.347C18.1434 12.7395 17.7692 13 17.3508 13C16.9324 13 16.5582 12.7395 16.413 12.347L15.8973 10.9535L14.5038 10.4379C14.1113 10.2926 13.8508 9.91844 13.8508 9.5C13.8508 9.08156 14.1113 8.70736 14.5038 8.56215L15.8973 8.0465L16.413 6.65296C16.5582 6.26053 16.9324 6 17.3508 6ZM16.6756 8.82477L14.8508 9.5L16.6756 10.1752L17.3508 12L18.026 10.1752L19.8508 9.5L18.026 8.82477L17.3508 7L16.6756 8.82477Z" />
  </>
);

export default function EveningCrescent({
  bold,
  ...props
}: SvgIconPropsWithBold) {
  return <SvgIcon {...props}>{bold ? <Thick /> : <Thin />}</SvgIcon>;
}