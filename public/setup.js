import { MonacoEditorLanguageClientWrapper, vscode } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";
import monarchSyntax from "./syntaxes/rob.monarch.js";

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');

const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('rob');       // WARNING Dependent of your project

editorConfig.setMonarchTokensProvider(monarchSyntax);

let code = `fun Void mainCode () {
    Number count = 0;
    Repeat((count < 5))
    {	
        setSpeed( (500 * (count + 1) ), CM);
        count = (count + 1);
        square(count);
    };
}

fun Void square(Number count){
    Deplacement(AVANT, (500 + count), CM);
    Clock(90);
    Deplacement(AVANT, (500 + count), CM);
    Clock(90);
    Deplacement(AVANT, (500 + count), CM);
    Clock(90);
    Deplacement(AVANT, (500 + count), CM);
    Clock(90);
}`

editorConfig.setMainCode(code);

editorConfig.theme = 'vs-dark';
editorConfig.useLanguageClient = true;
editorConfig.useWebSocket = false;

const typecheck = (async () => {
    console.info('typechecking current code...');

    // To implement (Bonus)
    
    if(errors.length > 0){
        const modal = document.getElementById("errorModal");
        modal.style.display = "block";
    } else {
        const modal = document.getElementById("validModal");
        modal.style.display = "block";
    }
});

const parseAndValidate = (async () => {
    let tableau_error = [/*{error:"syntaxe", message:"Veuillez verifier le ; à la ligne 5"},{error:"grammar", message:"Mauvaise déclaration de fonction"}*/];
    let messageValidate;

    //Code à parser et valider
    let code = client.getEditor().getModel()?.getValue();

    if(tableau_error.length > 0){
        messageValidate = "Code non valide - Veuillez voir les erreurs et les corriger afin de pouvoir simuler le robot\n\n";
        var modalBody = document.querySelector("#errorModal .modal-body");
        modalBody.innerText = messageValidate;

        tableau_error.forEach(function (errorObject) {
            // Accédez aux propriétés de chaque objet
            var errorType = errorObject.error;
            var errorMessage = errorObject.message;

            // Concaténation correcte des chaînes de caractères avec le message d'erreur
            modalBody.innerText += "Type d'erreur : " + errorType + ", Message : " + errorMessage + "\n";
        });
        

        let nonValidModalBody = document.getElementById("errorModal");
        nonValidModalBody.style.display = "block";
    }else{
        messageValidate = "Code valide - prêt à l'éxécution";
        var modalBody = document.querySelector("#validModal .modal-body");
        modalBody.innerText = messageValidate;

        let validModalBody = document.getElementById("validModal");
        validModalBody.style.display = "block";
    }
});

const resetSimulation = (async () => {
    window.setup();   
});

const reset = (async () => {
    client.getEditor().getModel()?.setValue("");
    window.setup();
});

const execute = (async () => {
    client.getLanguageClient().sendNotification('browser/execute', { content: client.getEditor().getModel().getValue() });
    client.getLanguageClient().onNotification('browser/sendStatements', async (params) => {
        //console.log(params);
        for (let i = 0; i < params.length; i++) {
            const statement = params[i];
            if (statement.type === "AVANT") {
                await window.p5robot.move(statement.Value);
            }
    
            if (statement.type === "GAUCHE") {
                console.log(statement.Value);
                window.p5robot.turn(statement.Value * 1);
            }
            await new Promise(r => setTimeout(r, 1000));
        }
    
    });
});


const setupSimulator = (scene) => {
    console.log("Scene : ",scene);
    const wideSide = max(scene.size.x, scene.size.y);
    let factor = 1000 / wideSide;

    window.scene = scene;

    scene.entities.forEach((entity) => {
        if (entity.type === "Wall") {
            window.entities.push(new Wall(
                (entity.pos.x)*factor,
                (entity.pos.y)*factor,
                (entity.size.x)*factor,
                (entity.size.y)*factor
                ));
        }
        if (entity.type === "Block") {
            window.entities.push(new Wall(
                (entity.pos.x)*factor,
                (entity.pos.y)*factor,
                (entity.size.x)*factor,
                (entity.size.y)*factor
                ));
        }
    });

    window.p5robot = new Robot(
        factor,
        scene.robot.pos.x,
        scene.robot.pos.y,
        scene.robot.size.x * factor,
        scene.robot.size.y * factor,
        scene.robot.rad
    );
}

window.execute = execute;
window.typecheck = typecheck;
//window.setup = setupSimulator;
window.resetSimulation = resetSimulation;
window.parseAndValidate = parseAndValidate;
window.reset = reset;

var errorModal = document.getElementById("errorModal");
var validModal = document.getElementById("validModal");
var closeError = document.querySelector("#errorModal .close");
var closeValid = document.querySelector("#validModal .close");
closeError.onclick = function() {
    errorModal.style.display = "none";
}
closeValid.onclick = function() {
    validModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == validModal) {
        validModal.style.display = "none";
    }
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
  } 

const workerURL = new URL('./rob-server-worker.js', import.meta.url); // WARNING Dependent of your project
console.log(workerURL.href);

const lsWorker = new Worker(workerURL.href, {
    type: 'classic',
    name: 'RoboMl Language Server'
});
client.setWorker(lsWorker);

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
const startingPromise = client.startEditor(document.getElementById("monaco-editor-root"));


