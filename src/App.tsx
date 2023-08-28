import MainLayout from "./layouts/MainLayout.tsx";
import TasksModule from "./modules/Tasks/TasksModule.tsx";

function App() {

    return (
        <div className="App">
            <MainLayout>
                <div className="container">
                    <TasksModule/>
                </div>
            </MainLayout>
        </div>
    );
}

export default App;
