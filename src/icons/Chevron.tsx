import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChevronUp = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M5.21967 15.2803C5.51256 15.5732 5.98744 15.5732 6.28033 15.2803L11.75 9.81066L17.2197 15.2803C17.5126 15.5732 17.9874 15.5732 18.2803 15.2803C18.5732 14.9874 18.5732 14.5126 18.2803 14.2197L12.2803 8.21967C11.9874 7.92678 11.5126 7.92678 11.2197 8.21967L5.21967 14.2197C4.92678 14.5126 4.92678 14.9874 5.21967 15.2803Z" />
  </SvgIcon>
);

const ChevronRight = styled(ChevronUp)({ transform: 'rotate(90deg)' });

const ChevronDown = styled(ChevronUp)({ transform: 'rotate(180deg)' });

const ChevronLeft = styled(ChevronUp)({ transform: 'rotate(270deg)' });

export { ChevronUp, ChevronRight, ChevronDown, ChevronLeft };
