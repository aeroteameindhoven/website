import React from "react";

interface Props {
  className?: string;
}

export function InfoEmail(props: React.PropsWithChildren<Props>) {
  return (
    <a href="mailto:info@aeroteameindhoven.nl" className={props.className}>
      {props.children}
    </a>
  );
}

export function JoinEmail(props: React.PropsWithChildren<Props>) {
  return (
    <a
      href={`mailto:join@aeroteameindhoven.nl?subject=Interest in joining Aero Team Eindhoven!&body=Tell us about yourself!`}
      className={props.className}
    >
      {props.children}
    </a>
  );
}

export function PartnersEmail(props: React.PropsWithChildren<Props>) {
  return (
    <a
      href={`mailto:partners@aeroteameindhoven.nl`}
      className={props.className}
    >
      {props.children}
    </a>
  );
}
