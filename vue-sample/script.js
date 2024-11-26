const settings = {
    data() {
        return {
            title: 'Hola mundo',
            personas: [
                { nombre: 'Juan', apellido: 'Perez', active: false },
                { nombre: 'Carlos', apellido: 'Sanchez', active: true }
            ]
        }
    }
};

const app = Vue.createApp(settings);
app.mount('#app');