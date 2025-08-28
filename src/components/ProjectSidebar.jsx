import Button from "./Button.jsx";

export default function ProjectSidebar({onStartAddProject, projects,
       onSelectedProject,selectedProjectId,
                                       }) {
    return (<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">
            Your Project
        </h2>
        <div>
            <Button onClick={onStartAddProject}>+ Add project</Button>
        </div>
        <ul className="mt-8">


            {projects.map((project) => {
                let cssClasses = "w-full text-left px-2 py-1 rotate-sm my-1 text-stone-300 hover:text-stone-200";

                if (project.id === selectedProjectId) {
                    cssClasses += " bg-stone-800";
                } else {
                    cssClasses += " bg-stone-400";
                }

                return (<li key={project.id}>
                    <button
                        className={cssClasses}
                        onClick={() =>onSelectedProject(project.id)}>
                        {project.title}
                    </button>
                </li>);
            })}
        </ul>
    </aside>);
}
