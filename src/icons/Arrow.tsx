import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const ArrowUp = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M16.5527 10.947C16.8456 11.2399 17.3204 11.2399 17.6133 10.947C17.9062 10.6541 17.9062 10.1792 17.6133 9.88634L12.9467 5.21967C12.8179 5.09092 12.654 5.01877 12.4859 5.00321C12.4627 5.00107 12.4395 5 12.4163 5C12.4162 5 12.4161 5 12.416 5C12.2022 5 12.0093 5.08947 11.8727 5.23301L7.21934 9.88634C6.92645 10.1792 6.92645 10.6541 7.21934 10.947C7.51224 11.2399 7.98711 11.2399 8.28 10.947L11.666 7.56099L11.666 19.0833C11.666 19.4975 12.0018 19.8333 12.416 19.8333C12.8302 19.8333 13.166 19.4975 13.166 19.0833L13.166 7.56033L16.5527 10.947Z" />
  </SvgIcon>
);

const ArrowRight = styled(ArrowUp)({ transform: "rotate(90deg)" });

const ArrowDown = styled(ArrowUp)({ transform: "rotate(180deg)" });

const ArrowLeft = styled(ArrowUp)({ transform: "rotate(270deg)" });

export { ArrowUp, ArrowRight, ArrowDown, ArrowLeft };
