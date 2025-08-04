/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageWrapperStyle = css({
  backgroundColor: '#FFF8E1',
  backgroundImage: 'url(/paisley-background.png)',
  backgroundRepeat: 'repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  height: '100%',
});

export const pageInnerStyle = css({
  backgroundColor: 'rgba(255, 248, 225, 0.85)',
  backdropFilter: 'blur(1px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  padding: '2rem',
});

export const coverPageStyle = (isMobile: boolean) => css({
  backgroundImage: 'url(/subhalekha-cover.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '1rem',
});

export const coverStackStyle = (isMobile: boolean) => css({
  textAlign: 'center',
  color: 'white',
});

export const titleStyle = (isMobile: boolean) => css({
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 400,
  opacity: 0.95,
  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  fontSize: isMobile ? '1.2rem' : '1.5rem',
});

export const textWedsStyle = (isMobile: boolean) => css({
  fontFamily: "'Lora', serif",
  opacity: 0.8,
  fontSize: isMobile ? '0.8rem' : '1rem',
});

export const clickToOpenStyle = css({
  fontFamily: "'Lora', serif",
  opacity: 0.7,
});

export const leftTitleStyle = (isMobile: boolean) => css({
  fontFamily: "'Cormorant Garamond', serif",
  color: '#800000',
  lineHeight: 1.2,
  fontSize: isMobile ? '1.5rem' : '2.2rem',
});

export const leftTextStyle = css({ fontFamily: "'Lora', serif" });

export const dividerLabelStyle = (isMobile: boolean) => css({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: isMobile ? '1.5rem' : '2rem',
  color: '#B08D57',
});

export const rightTitleStyle = (isMobile: boolean) => css({
  fontFamily: "'Lora', serif",
  color: '#800000',
  fontSize: isMobile ? '1rem' : '1.2rem',
});

export const rightTextStyle = css({ fontFamily: "'Lora', serif" });

export const backCoverBoxStyle = css({
  backgroundColor: 'rgba(80, 0, 0, 0.6)',
  backdropFilter: 'blur(2px)',
  borderRadius: '8px',
  padding: '2rem',
  maxWidth: '85%',
  textAlign: 'center',
});

export const backCoverTextStyle = (isMobile: boolean) => css({
  fontFamily: "'Lora', serif",
  fontStyle: 'italic',
  fontSize: isMobile ? '0.9rem' : '1.1rem',
  color: '#FFF8E1',
  opacity: 0.8,
});

export const backCoverTitleStyle = (isMobile: boolean) => css({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: isMobile ? '1.3rem' : '1.6rem',
  color: 'white',
});

export const backCoverNamesStyle = (isMobile: boolean) => css({
  fontFamily: "'Lora', serif",
  fontSize: isMobile ? '0.9rem' : '1rem',
  color: '#FFF8E1',
  opacity: 0.9,
});

export const backCoverBlessingStyle = (isMobile: boolean) => css({
  fontFamily: "'Lora', serif",
  opacity: 0.7,
  color: '#FFF8E1',
  fontSize: isMobile ? 'xs' : 'sm',
});

export const bookContainerStyle = css({
  backgroundColor: '#D7CCC8',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
});
