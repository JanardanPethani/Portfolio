import { cn } from "@/lib/utils";
import styles from "./Name.module.scss";

const Name = () => {
  const F_NAME = "Janardan";
  const L_NAME = "Pethani";

  return (
    <div
      className={
        "flex flex-wrap gap-4 justify-center font-akshar text-center w-full mt-16 mb-5"
      }
    >
      <div>
        {F_NAME.split("").map((character, idx) => {
          return (
            <span
              className={cn(
                styles.character,
                "font-bold text-base tablet:text-xl laptop:text-5xl"
              )}
              key={`${character}-${idx}`}
            >
              {character}
            </span>
          );
        })}
      </div>
      <div>
        {L_NAME.split("").map((character, idx) => {
          return (
            <span
              className={cn(
                styles.character,
                "font-bold text-base tablet:text-xl laptop:text-5xl"
              )}
              key={`${character}-${idx}`}
            >
              {character}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Name;
