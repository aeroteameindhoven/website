import * as React from "react";

const IndexPage = () => {

  const buttons: number[] = [1,2,3,4,5,6,7];

  return (
    <main>
      Hoi daar
      {buttons.filter((a) => a % 2 ==0).map((a) => <Button key={a} text={`Knop ${a}`} />)}
      
    </main>
  );
};

interface ButtonProps {
  /**
   * This text is the label of the button
   */
  text: string;
}

/**
 * This button has red text and margin
 */
const Button: React.FC<ButtonProps> = (props) => {
  return <button style={{ color: "red", fontSize: 20, display: "block", marginBottom: 20}}>{props.text}</button>;
};

export default IndexPage;
