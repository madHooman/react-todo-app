import {useState} from "react";
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
    const [projectState, setProjects ] = useState(
        {
            selectedProjectId :undefined,
            projects : [],
            tasks:[]
        });
    function handleAddTask(text){
        setProjects(prevState => {
            const taskId = Math.random().toString();

            const newTask = {
                text:text,
                projectId:prevState.selectedProjectId,
                id: taskId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                tasks: [newTask ,...prevState.tasks],
            };
        });
    }

    function handleDeleteTask(id){
        setProjects(prevState => {
            return{
                ...prevState,
                tasks: prevState.tasks.filter((task) =>  task.id !== id
                ),

            };
        });
    }
    function handleSelectProject(id) {
        setProjects((prevState) => {
            return{
                ...prevState,
                selectedProjectId : id,

            };
        });
    }
    function handelStartProject() {
        setProjects((prevState) => {
            return{

                ...prevState,
                selectedProjectId : null,

            };
        });
    }

    function handelCancelAddProject() {

        setProjects((prevState) => {
            return{

                ...prevState,
                selectedProjectId : undefined,

            };
        });
    }


    function handelAddProject(projectData) {
        setProjects(prevState => {
            const projectId = Math.random().toString(); // یا هر روش دیگه‌ای

            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }




    function handelDeleteProject() {
setProjects(prevState => {
    return{
        ...prevState,
        selectedProjectId : undefined,
        projects: prevState.projects.filter(
            (project) =>
            project.id !== prevState.selectedProjectId
        ),

    };
        });

    }


    const selectedProject = projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId
    );



    let content = <SelectedProject
        project={selectedProject}
        onDelete={handelDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
    />;

    if (projectState.selectedProjectId ===null) {
        content =<NewProject onAdd={handelAddProject} onCancelAdd={handelCancelAddProject} />
    }
    else if (projectState.selectedProjectId === undefined) {
        content =        <NoProjectSelected onStartAddProject={handelStartProject} />
        ;
    }
  return (
    <main className="h-screen my-8 flex gap-8">


        <ProjectSidebar
        onStartAddProject={handelStartProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
        />
        {content}
        <h5>        create by <strong>Hooman</strong></h5>
    </main>
  );
}



    export default App;
