import { useState } from "react";
import DataForm from "../../../common/DataForm";
import Dropdown from "../../../common/Dropdown";
import ModalNewProject from "./ModalNewProject";
import useModal from "../../../hooks/useModal";
import SchemaDescription from "./SchemaDescription";

export default function FormAddNft() {
  const [position, setPosition] = useState(0);

  const pages = [
    <BasicInfo setPosition={setPosition} />,
    <MetaData setPosition={setPosition} />,
  ];

  return <>{pages[position]}</>;
}

function BasicInfo(props: {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}) {
  const projects = ["Fratelli", "Project X", "Walk o prison"];

  const modal = useModal();

  function submitHandler(data: Record<string, string>) {
    let h = JSON.parse(JSON.stringify(data));

    const reader = new FileReader();
    reader.readAsText(data["abi"][0] as any);

    reader.onload = (event) =>
      (h.abi = JSON.stringify(JSON.parse(event.target?.result as string)));

    props.setPosition((p) => p + 1);
  }

  return (
    <section className="h-screen p-page pt-[18vh]">
      <h2 className="text-transparent bg-gradient-to-r from-front via-primary to-secondary bg-clip-text">
        <span className="text-3xl font-light">Adding as</span>
        <span className="pl-4">
          {"0xcE7ceFc488dC178680af0D0f484356d27CB89725"}
        </span>
      </h2>

      <DataForm.Container
        className="flex flex-col gap-y-10 my-20 min-h-[60vh] p-10 rounded-3xl bg-secondary bg-opacity-20 relative"
        onSubmit={submitHandler}
      >
        {/* <div className="absolute right-0 top-0 h-full w-full bg-cover bg-[url('/images/abstract-1.jpg')] -z-1" /> */}

        {projects.length !== 0 && (
          <div className="">
            <div className="flex items-center">
              <h2 className="font-extralight text-xl mr-3">
                The project this NFT is associated with is
              </h2>
              <Dropdown.Container
                placeholder="select"
                name="project"
                className="bg-background px-8 py-3 rounded-md"
              >
                {projects.map((project, key) => (
                  <Dropdown.Option
                    key={key}
                    className="w-full bg-background py-3 bg-opacity-40 text-front border border-t-transparent border-primary border-opacity-30 backdrop-blur-sm duration-300 hover:saturate-200 hover:brightness-125"
                  >
                    {project}
                  </Dropdown.Option>
                ))}
              </Dropdown.Container>
            </div>
          </div>
        )}
        <div className="flex gap-x-2">
          <h3 className="font-extralight text-lg">
            Is the relevant project not listed?
          </h3>
          <button
            className="text-primary brightness-125 underline font-light"
            onClick={() => modal.show(<ModalNewProject />)}
          >
            Create new Project now
          </button>
        </div>
        <figure className="border border-front border-opacity-10" />
        <div className="flex flex-col gap-y-10 pr-[25%]">
          <div className="flex gap-x-3 items-center">
            <h3 className="font-light">
              What would you like us to call this NFT contract ?
            </h3>
            <DataForm.Input
              name="name"
              required
              placeholder="Enter name for your NFT..."
              className="bg-background px-6 py-2 rounded-md flex-1"
            />
          </div>
          <div className="flex gap-x-3 items-center">
            <h3 className="font-light">
              Please enter the address of your contract
            </h3>
            <DataForm.Input
              name="address"
              required
              placeholder="Enter Contract Address..."
              className="bg-background px-6 py-2 rounded-md flex-1"
            />
          </div>
          <div className="flex gap-x-3 items-center">
            <h3 className="font-light">Please upload ABI of the contract</h3>
            <DataForm.Input
              name="abi"
              required
              type="file"
              accept="application/json"
              placeholder="Enter Contract Address..."
              className="bg-background px-6 py-2 rounded-md flex-1"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <DataForm.Input
            type="submit"
            required
            className="bg-primary text-back px-8 py-2 rounded-full cursor-pointer"
            value="Next"
          />
        </div>
      </DataForm.Container>
    </section>
  );
}

function MetaData(props: {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className="h-screen flex flex-col justify-end py-8">
      <SchemaDescription />
    </section>
  );
}
