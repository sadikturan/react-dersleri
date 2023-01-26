var root = document.getElementById('root');

var template =  <div>
                    <h1 id="header">Hello World</h1>
                    <div>Lorem, ipsum dolor.</div>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>;

var number = 0;
var btnOneClassName = "btnRed";
var btnMinusClassName = "btnBlue";

function addOne() {
    console.log('add one');
}

var minusOne = () => {
    console.log('minus one');
}

var template2 = (
    <div>
        <h1>Number: {number}</h1>
        <button id="btnPlusOne" className={btnOneClassName} onClick={addOne}>+1</button>
        <button id="btnMinusOne" className={btnMinusClassName} 
                onClick={() => {
                    console.log('minus one');
                }}>-1
        </button>
    </div>
);


ReactDOM.render(template2, root);
