import React from 'react';

export function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path>
    </svg>
  );
}

export function CreateFolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path>
    </svg>
  );
}

export function FileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path>
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path>
    </svg>
  );
}

export function LoadingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100" style={{ margin: 'auto' }}>
      <circle cx="50" cy="50" r="22.657" fill="none" stroke="#0051a2" strokeWidth="2">
        <animate attributeName="r" begin="-0.5s" calcMode="spline" dur="1s" keySplines="0 0.2 0.8 1" keyTimes="0;1" repeatCount="indefinite" values="0;40"></animate>
        <animate attributeName="opacity" begin="-0.5s" calcMode="spline" dur="1s" keySplines="0.2 0 0.8 1" keyTimes="0;1" repeatCount="indefinite" values="1;0"></animate>
      </circle>
      <circle cx="50" cy="50" r="38.96" fill="none" stroke="#1b75be" strokeWidth="2">
        <animate attributeName="r" calcMode="spline" dur="1s" keySplines="0 0.2 0.8 1" keyTimes="0;1" repeatCount="indefinite" values="0;40"></animate>
        <animate attributeName="opacity" calcMode="spline" dur="1s" keySplines="0.2 0 0.8 1" keyTimes="0;1" repeatCount="indefinite" values="1;0"></animate>
      </circle>
    </svg>
  );
}
