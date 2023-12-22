import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { doc, getDoc,  getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ref, get, child, getDatabase  } from "firebase/database";

import express from 'express';
import session from "express-session";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
//require('dotenv').config();

const firebaseConfig = {
    apiKey: "AIzaSyBAjyHJoK042ui2QB8pF9d1mIt5TKbUdLY",
    authDomain: "sakura-b9969.firebaseapp.com",
    databaseURL: "https://sakura-b9969-default-rtdb.firebaseio.com",
    projectId: "sakura-b9969",
    storageBucket: "sakura-b9969.appspot.com",
    messagingSenderId: "808797111816",
    appId: "1:808797111816:web:69f768f2eec728c4b0b3bd"

};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig)
export const auth= getAuth(app1)
export const provider = new GoogleAuthProvider();

export const db = getDatabase(app1);
export const storage = getStorage(app1);



export default app1;

const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Permite acceso desde cualquier origen
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    // Métodos que deseas permitir
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    // Pasar al siguiente middleware
    next();
});

app.use(session({
    secret: 'ok',  // Reemplaza 'tu_secreto' con una cadena secreta propia
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Configura como 'true' si estás usando HTTPS
  }));

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.static('js'));

// Middleware para analizar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
    res.render('index.ejs'); // Reemplaza 'index' con tu plantilla HTML/EJS principal
}); 
app.get('/dashboard', (req, res) => {
    if (req.session.authToken) {
        res.render('dashboard',{ authToken: req.session.authToken || null });
    } else {
        res.redirect('/');
    }
});
app.get('/actors', (req, res) => {
    if (req.session.authToken) {
        res.render('actors', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});

app.get('/influencers', (req, res) => {
    if (req.session.authToken) {
        res.render('influencers', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/add_influencer', (req, res) => {
    if (req.session.authToken) {
        res.render('add_influencer', { authToken: req.session.authToken, sessionId: req.session.userId  });
    } else {
        res.redirect('/');
    }
});
app.get('/add_actor', (req, res) => {
    if (req.session.authToken) {
        res.render('add_actor', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});

app.get('/actress', (req, res) => {
    if (req.session.authToken) {
        res.render('actress', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});


app.get('/add_actress', (req, res) => {
    if (req.session.authToken) {
        res.render('add_actress', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});


app.get('/add_creative', (req, res) => {
    if (req.session.authToken) {
        res.render('add_creative', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});

app.get('/categories', (req, res) => {
    if (req.session.authToken) {
        res.render('categories', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/creatives', (req, res) => {
    if (req.session.authToken) {
        res.render('creatives', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});

app.get('/edit_actor', (req, res) => {
    if (req.session.authToken) {
        res.render('edit_actor', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/edit_actress', (req, res) => {
    if (req.session.authToken) {
        res.render('edit_actress', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/edit_creative', (req, res) => {
    if (req.session.authToken) {
        res.render('edit_creative', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/edit_entrance', (req, res) => {
    if (req.session.authToken) {
        res.render('edit_entrance', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/entrances', (req, res) => {
    if (req.session.authToken) {
        res.render('entrances', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/new_entrance', (req, res) => {
    if (req.session.authToken) {
        res.render('new_entrance', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/categories', (req, res) => {
    if (req.session.authToken) {
        res.render('categories', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});
app.get('/edit_influencers', (req, res) => {
    if (req.session.authToken) {
        res.render('edit_influencers', { authToken: req.session.authToken });
    } else {
        res.redirect('/');
    }
});




app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            userCredential.user.getIdToken().then(token => {
                req.session.authToken = token;
                req.session.userId = userCredential.user.uid; // Corregido
                res.redirect('/dashboard');
            });     
        })
        .catch((error) => {
            // Error en el inicio de sesión
            res.redirect(`/index.ejs?error=${encodeURIComponent(error.message)}`);
        });
});






//API 

app.get('/api/actores', async (req, res) => {
    
    const actoresRef = ref(db, "Talentos/Actores");

    try {
        const snapshot = await get(actoresRef);
        if (snapshot.exists()) {
            const actores = [];
            snapshot.forEach((childSnapshot) => {
                const actor = childSnapshot.val();
                if (actor.status === "Activo") {
                    actores.push({ ...actor, key: childSnapshot.key });
                }
            });
            actores.sort((a, b) => a.posicion - b.posicion);
            res.json(actores);
        } else {
            res.status(404).send('No se encontraron actores');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener actores');
    }
});



app.get('/api/actores/:usuario', async (req, res) => {
    const usuarioBuscado = req.params.usuario;
    const actoresRef = ref(db, "Talentos/Actores");

    try {
        const snapshot = await get(actoresRef);
        if (snapshot.exists()) {
            const actoresEncontrados = [];
            snapshot.forEach((childSnapshot) => {
                const actor = childSnapshot.val();
                if (actor.status === "Activo" && actor.usuario === usuarioBuscado) {
                    actoresEncontrados.push({ ...actor, key: childSnapshot.key });
                }
            });

            if (actoresEncontrados.length > 0) {
                res.json(actoresEncontrados);
            } else {
                res.status(404).send('No se encontraron actores con el usuario especificado');
            }
        } else {
            res.status(404).send('No se encontraron actores');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener actores');
    }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
