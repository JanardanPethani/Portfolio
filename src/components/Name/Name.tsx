import { cn } from "@/lib/utils";
import styles from "./Name.module.scss";

const Name = () => {
  const F_NAME = "Janardan";
  const L_NAME = "Pethani";

  return (
    <div className={"font-akshar text-center w-full my-16"}>
      {F_NAME.split("").map((character, idx) => {
        return (
          <span
            className={cn(styles.character, "font-bold text-7xl")}
            key={`${character}-${idx}`}
          >
            {character}
          </span>
        );
      })}
      <span className="mx-1.5" />
      {L_NAME.split("").map((character, idx) => {
        return (
          <span
            className={cn(styles.character, "font-bold text-7xl")}
            key={`${character}-${idx}`}
          >
            {character}
          </span>
        );
      })}
    </div>
  );
};

export default Name;
