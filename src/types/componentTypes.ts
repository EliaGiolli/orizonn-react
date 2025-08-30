  //React provides with types to assign a type to an HTML element
  export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'customBtn' | 'hamburgerBtn' | 'default';
    active?:boolean;
  };

  export interface FooterProps {
    className?: string; // Accept className prop
  }