import { useState } from "react";
import Icon from "../../../common/Icon";
import { twMerge } from "tailwind-merge";
import { ABIEntry } from "../../../types/Data";

interface OutputFieldItemProps {
  field: ABIEntry;
}

export default function OutputFieldItem(props: OutputFieldItemProps) {
  const { field } = props;
  const [included, setIncluded] = useState(false);

  return (
    <div
      className={twMerge(
        "p-5 rounded-lg",
        included &&
          "bg-secondary bg-opacity-10 border border-primary border-opacity-30"
      )}
    >
      <button
        className="flex items-center gap-x-2"
        onClick={() => setIncluded((b) => !b)}
      >
        <div
          className={twMerge(
            "p-1 h-[1.23em] aspect-square border border-front rounded-sm flex justify-center items-center",
            included && "bg-secondary bg-opacity-30 border-primary text-primary"
          )}
        >
          {included && <Icon icon="done" />}
        </div>
        <h2
          className={twMerge(
            "",
            included &&
              "text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-secondary font-bold"
          )}
        >
          {field.name}
        </h2>
      </button>

      {included && (
        <div className="flex flex-col">
          <textarea
            placeholder="Please describe this function"
            className="w-2/3 mt-8 rounded-sm h-[8em] bg-background bg-opacity-90 border border-front border-none outline-none duration-150 p-2 focus:border-primary focus:border-opacity-50 placeholder:text-sm"
          />
          <div className="mt-3 mb-2 flex flex-col gap-y-6">
            <h3 className="mt-5 p-1 font-light text-primary">Outputs :</h3>
            {field.outputs.map((output, key) => (
              <div
                key={key}
                className="bg-background bg-opacity-90 p-4 rounded-lg w-2/3 flex flex-col gap-y-6"
              >
                <h3 className="font-light relative w-max flex gap-x-3 items-center">
                  <span className="text-primary">•</span> {output.name}
                  <p className="text-xs text-secondary">type : {output.type}</p>
                </h3>

                <input
                  placeholder="Enter Name for NFX Mapping of this output"
                  className="bg-transparent border border-front border-opacity-30 w-1/2 outline-none rounded-sm duration-150 p-2 focus:border-primary focus:border-opacity-50 placeholder:text-sm"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
