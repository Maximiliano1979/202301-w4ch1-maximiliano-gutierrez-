import { GentlemenStructure } from "../../types";

interface GentlemanProps {
  gentleman: GentlemenStructure;
}

const Gentleman = ({ gentleman }: GentlemanProps): JSX.Element => {
  return (
    <article>
      <h3> {gentleman.name}</h3>
      <span>{gentleman.status}</span>
      <span>{gentleman.profession}</span>
      <span>{gentleman.twitter}</span>
    </article>
  );
};

export default Gentleman;
