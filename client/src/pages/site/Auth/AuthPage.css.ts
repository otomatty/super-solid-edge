import { style } from '@vanilla-extract/css';

export const authContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f2f5',
});

export const authCard = style({
  width: '100%',
  maxWidth: '400px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '2rem',
});

export const authTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  textAlign: 'center',
});

export const authForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const authButton = style({
  'width': '100%',
  'padding': '0.75rem',
  'backgroundColor': '#1877f2',
  'color': 'white',
  'border': 'none',
  'borderRadius': '4px',
  'fontSize': '1rem',
  'fontWeight': 'bold',
  'cursor': 'pointer',
  ':hover': {
    backgroundColor: '#166fe5',
  },
  ':disabled': {
    backgroundColor: '#9cb3d8',
    cursor: 'not-allowed',
  },
});

export const authToggle = style({
  marginTop: '1rem',
  textAlign: 'center',
  fontSize: '0.9rem',
});

export const authToggleLink = style({
  'color': '#1877f2',
  'textDecoration': 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const loadingOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '1.5rem',
  zIndex: 1000,
});
