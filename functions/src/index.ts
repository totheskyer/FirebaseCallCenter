const cors = require('cors')({origin: true});

const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const firebase = require('firebase');

const settings = { timestampsInSnapshots: true };
admin.firestore().settings(settings);
const db = admin.firestore();

exports.getCalls = functions.https.onRequest((req: any, res: any) => {
    cors(req, res, () => {
        let docRef = db.collection('callcenter').doc('fpZUf604dFiWa7b5WRpy')
        docRef.get()
            .then((doc: any) => {
                if (!doc) {
                    console.log('No such document!');
                } else {
                    console.log(doc.data());
                    return res.send(JSON.stringify(doc.data()));
                }
            })
            .catch((err: any) => {
                console.info('Error getting documents', err);
                return res.send(JSON.stringify({'errMessage': err}));
            });
    });
});
