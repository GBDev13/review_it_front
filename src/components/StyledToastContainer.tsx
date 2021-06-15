import React from 'react';
import styled from 'styled-components';
import { ToastContainer, ToastContainerProps } from 'react-toastify';

const StyledToastContainer = ({
  className,
  ...rest
}: ToastContainerProps & { className?: string }) => (
  <div className={className}>
    <ToastContainer {...rest} newestOnTop />
  </div>
);

export const StyledToast = styled(StyledToastContainer)`
  .Toastify__toast--error {
    background: ${props => props.theme.colors.error} !important;
  }
  .Toastify__toast--warning {
    background: ${props => props.theme.colors.textSecondary} !important;
  }
  .Toastify__toast--success {
    background: ${props => props.theme.colors.primary} !important;
  }
  .Toastify__toast-body {
    font-family: 'Roboto', sans-serif;
  }
`;
