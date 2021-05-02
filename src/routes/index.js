import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error from '../pages/Error404';

const router = async () => {
    const header = null || document.getElementById('Header');
    const content = null || document.getElementById('Content');

    header.innerHTML = await Header();
};

export default router;