import Sidebar from './Sidebar';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import MainPage from './MainPage';
import Contact from './Contact';
//HTTP -> get post-create put-update delete
function Main() {
    return (
        <div class="row">
            <div class="col-1">
                <Sidebar />
            </div>
            <div class="col-10">
                <MainPage />
            </div>
        </div>
    );
}
export default Main;