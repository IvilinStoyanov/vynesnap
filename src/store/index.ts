import { createStore } from 'vuex';
import { Snap } from '@/models/snap';

const store = createStore({
    state() {
        return {
            snaps: [
                { id: '1', title: '1 snap', description: 'lorem ipsum 1.....', imgUrl: "https://images.unsplash.com/photo-1682687218982-6c508299e107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" },
                { id: '2', title: '2 snap', description: 'lorem ipsum 2.....', imgUrl: "https://images.unsplash.com/photo-1703431012730-a27b347e81b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" },
                { id: '3', title: '2 snap', description: 'lorem ipsum 3.....', imgUrl: "https://images.unsplash.com/photo-1703414909483-dbc76e95c5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" },
                { id: '4', title: '3 snap', description: 'lorem ipsum 4.....', imgUrl: "https://images.unsplash.com/photo-1703432799866-1f788053fb3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" },
                { id: '5', title: '4 snap', description: 'lorem ipsum 5.....', imgUrl: "https://plus.unsplash.com/premium_photo-1675098651780-2f2b3f8590f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" },
            ]
        }
    },
    getters: {
        snaps(state) {
            return state.snaps;
        },
        snap(state) {
            return (snapId: string) => {
              return state.snaps.find((snap: Snap) => snap.id === snapId);
            } 
        }
    }
});

export default store;