import DataForm from "../../common/DataForm";
import Dropdown from "../../common/Dropdown";

const projects = ["Fratelli", "Project X", "Walk o prison"];

export default function AddNftPage() {
  return (
    <>
      <section className="h-screen p-page pt-[18vh]">
        <h2 className="text-transparent bg-gradient-to-r from-front via-primary to-secondary bg-clip-text">
          <span className="text-3xl font-light">Adding as</span>
          <span className="pl-4">
            {"0xcE7ceFc488dC178680af0D0f484356d27CB89725"}
          </span>
        </h2>

        <DataForm.Container className="flex flex-col gap-y-12 my-20 bg-secondary min-h-[60vh] p-10 rounded-3xl bg-opacity-20">
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
            <button className="text-primary brightness-125 underline font-light">
              Create new Project now
            </button>
          </div>

          <div className=""></div>
        </DataForm.Container>
      </section>
    </>
  );
}
