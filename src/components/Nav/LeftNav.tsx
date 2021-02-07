import React from "react";
import styled from "styled-components";

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    open?: any;
  }
}

const Ul = styled.ul`
height:10vh;
  list-style: none;
  display: flex;
  justify-content:"space-evenly"
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    width: 25%;
   text-align:center;
   font-weight:600;
   color:#fff;
   display: flex;
   flex-direction: column;
   justify-content:center;
  }
  li:hover {
   color: linear-gradient(to right, #fdc830, #f37335);
   background::#fff;
  }
  background: linear-gradient(to right, #fdc830, #f37335);
  width: 100%;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #263238;
    opacity: 0.8;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      width: 100%;
    }
  }
`;

export default function LeftNav({ open }) {
  return (
    <Ul open={open}>
      <li onClick={() => (window.location = "/liste")}>
        100 premières cryptos-monnaies
      </li>
      <li onClick={() => (window.location = "/rechercher")}>
        Suivre une crypto-monnaie
      </li>
      <li onClick={() => (window.location = "/gagnants_et_perdants")}>
        Gagnants et perdants
      </li>

      <li onClick={() => (window.location = "/favoris")}>
        Les cryptos que je suis
      </li>
    </Ul>
  );
}
