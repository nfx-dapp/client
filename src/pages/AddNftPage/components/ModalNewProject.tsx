import React from "react";
import DataForm from "../../../common/DataForm";
import useModal from "../../../hooks/useModal";

export default function ModalNewProject() {
  const modal = useModal();

  return (
    <div className="w-[35vw] rounded-2xl overflow-hidden  bg-background">
      <img
        src="/images/developer.jpg"
        alt="developer"
        className="aspect-video object-cover object-bottom"
      />

      <DataForm.Container className="flex flex-col gap-y-6 py-8 px-8">
        <div className="flex flex-col gap-y-2 text-front text-opacity-80">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-front text-4xl font-bold font-inter">
            Hi Developer!
          </h1>
          <h2 className="font-extralight">
            Please describe your next big NFT project
          </h2>
        </div>

        <DataForm.Input
          name="name"
          className="bg-transparent border px-2 py-1 rounded-md mt-3"
          placeholder="Enter project name"
          minLength={3}
          maxLength={64}
        />
        <DataForm.Textarea
          name="description"
          className="bg-transparent border px-2 py-1 rounded-md h-32"
          placeholder="Describe your project in a few words (500 max)"
          maxLength={500}
        />

        <div className="flex gap-x-4 duration-500">
          <button className="flex-1 bg-primary py-2 text-back font-medium rounded-md duration-inherit hover:brightness-200">
            Create
          </button>
          <button
            className="flex-1 bg-red-500 text-white font-medium rounded-md duration-inherit hover:brightness-200 hover:text-black"
            onClick={modal.hide}
          >
            Cancel
          </button>
        </div>
      </DataForm.Container>
    </div>
  );
}
